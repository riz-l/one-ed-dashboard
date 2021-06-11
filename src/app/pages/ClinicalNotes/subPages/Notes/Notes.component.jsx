// Import: Packages
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addPostDateTime,
  addPostEncounterID,
  addPostNote,
  addPostPatientName,
  addPostPractionerID,
  addPostPractionerName,
  addPutDateTime,
  addPutNote,
  addPutPractionerName,
  filterForPreviousNotes,
  getNotesQuestionnaireResponseDetail,
  getQuestionnaireResponse,
  postNewNote,
  putNewNote,
} from "../../../../../redux/slices/clinicalNotesSlice";
import moment from "moment";

// Import: Elements
import { Container, Wrapper } from "./Notes.elements";

// Import: Components
import { Form, NotesEntry, Text } from "../../../../components";

// SubPage: Notes
export default function Notes() {
  // Redux: useSelector, useDispatch
  const apiPostResponse = useSelector((state) => {
    if (state.clinicalNotes.notes.apiPostResponse) {
      return state.clinicalNotes.notes.apiPostResponse;
    }
  });
  const apiPutResponse = useSelector((state) => {
    if (state.clinicalNotes.notes.apiPutResponse) {
      return state.clinicalNotes.notes.apiPutResponse;
    }
  });
  const encounterID = useSelector((state) => {
    if (state.selectedPatient.patientData[0]) {
      return state.selectedPatient.patientData[0].encounterID;
    }
  });
  const filteredQuestionnaireResponse = useSelector((state) => {
    if (state.clinicalNotes.notes.filteredQuestionnaireResponse) {
      return state.clinicalNotes.notes.filteredQuestionnaireResponse;
    }
  });
  const newNote = useSelector((state) => {
    if (state.clinicalNotes.notes.newNote) {
      return state.clinicalNotes.notes.newNote;
    }
  });
  const newPutNote = useSelector((state) => {
    if (state.clinicalNotes.notes.newPutNote) {
      return state.clinicalNotes.notes.newPutNote;
    }
  });
  const patientName = useSelector((state) => {
    if (state.selectedPatient.patientData[0]) {
      return state.selectedPatient.patientData[0].name;
    }
  });
  const practionerID = useSelector((state) => {
    if (state.userDetails.details.ControlActEvent) {
      return state.userDetails.details.ControlActEvent.Subject.Value[0]
        .UserRoleProfile[0].UserID.extension;
    }
  });
  const practionerName = useSelector((state) => {
    if (state.userDetails.details.ControlActEvent) {
      return state.userDetails.details.ControlActEvent.Subject.Value[0]
        .UserRoleProfile[0].UserID.identifierName;
    }
  });
  const questionnaireResponse = useSelector((state) => {
    if (state.clinicalNotes.notes.questionnaireResponse) {
      return state.clinicalNotes.notes.questionnaireResponse;
    }
  });
  const questionnaireResponseDetail = useSelector((state) => {
    if (state.clinicalNotes.notes.questionnaireResponseDetail) {
      return state.clinicalNotes.notes.questionnaireResponseDetail;
    }
  });
  const dispatch = useDispatch();

  // Ref: Used for note TextArea
  const noteTextAreaRef = useRef();

  // Current Date, Time
  const date = new Date();
  const formattedDate = date.toISOString().substr(0, 10);
  const time = date.toLocaleTimeString(); // Triage Time
  const finalDate = moment(formattedDate).format("YYYY-MM-DD"); // Triage Date
  const putDateTime = finalDate.concat("T", time, "Z");
  const newDateTime = new Date(putDateTime);
  newDateTime.setHours(newDateTime.getHours() - 2);
  newDateTime.setSeconds(newDateTime.getSeconds() - 10);
  const newTime = newDateTime.toLocaleTimeString();
  const editedNewDateTime = moment(newDateTime).format("YYYY-MM-DD");
  const putEditedNewDateTime = editedNewDateTime.concat("T", newTime, "Z");

  // Effect: Fetches questionnaire response from API
  useEffect(() => {
    dispatch(addPostDateTime(putEditedNewDateTime));
    dispatch(addPostEncounterID(encounterID));
    dispatch(addPostPatientName(patientName));
    dispatch(addPostPractionerID(practionerID));
    dispatch(addPostPractionerName(practionerName));
    dispatch(addPutDateTime(putEditedNewDateTime));
    dispatch(addPutPractionerName(practionerName));
    dispatch(getQuestionnaireResponse());
  }, [
    apiPostResponse,
    apiPutResponse,
    dispatch,
    encounterID,
    patientName,
    practionerID,
    practionerName,
    putEditedNewDateTime,
  ]);

  // Effect: Filters questionnaire responses
  useEffect(() => {
    if (questionnaireResponse && questionnaireResponse.length > 0) {
      dispatch(filterForPreviousNotes());
    } else {
      return;
    }
  }, [dispatch, questionnaireResponse]);

  // Effect: Fetches questionnaire response detail from API
  useEffect(() => {
    dispatch(getNotesQuestionnaireResponseDetail());
  }, [dispatch, filteredQuestionnaireResponse]);

  // Adds a new post/put note to Redux
  const addNoteToRedux = () => {
    if (!filteredQuestionnaireResponse) {
      try {
        dispatch(addPostNote(noteTextAreaRef.current.value));
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        dispatch(addPutNote(noteTextAreaRef.current.value));
        dispatch(getNotesQuestionnaireResponseDetail());
      } catch (err) {
        console.log(err);
      }
    }
  };

  // Submit data to API
  const submitNewNote = async (event) => {
    event.preventDefault();
    if (!filteredQuestionnaireResponse) {
      try {
        dispatch(postNewNote());
        dispatch(addPostNote(""));
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        dispatch(putNewNote());
        dispatch(addPutNote(""));
      } catch (err) {
        console.log(err);
      }
    }
  };

  // Maps questionnaireResponseDetail through Notes
  const previousNotesRender =
    questionnaireResponseDetail && questionnaireResponseDetail.length > 0
      ? questionnaireResponseDetail.map(function (item, index) {
          return (
            <NotesEntry
              dateTime={item.dateTime}
              key={index}
              note={item.note}
              user={item.PractionerName}
            />
          );
        })
      : null;

  return (
    <>
      <Container data-testid={"notes"}>
        <Wrapper>
          <Text as="h2" heading>
            Notes
          </Text>

          <Form onSubmit={submitNewNote}>
            <Form.TextArea
              htmlFor="enterObservationNote"
              labelText="Enter observation note..."
              onChange={addNoteToRedux}
              ref={noteTextAreaRef}
              rows="8"
              value={
                !filteredQuestionnaireResponse ? newNote.note : newPutNote.note
              }
            />

            <Form.Button
              onClick={submitNewNote}
              margin="0 0 2rem 0"
              text="Submit Note"
            />
          </Form>

          <Text as="h3" subheading>
            Previous Notes
          </Text>

          {questionnaireResponseDetail &&
          questionnaireResponseDetail.length > 0 ? (
            previousNotesRender
          ) : (
            <Text as="p">The Patient has no historic notes</Text>
          )}
        </Wrapper>
      </Container>
    </>
  );
}
