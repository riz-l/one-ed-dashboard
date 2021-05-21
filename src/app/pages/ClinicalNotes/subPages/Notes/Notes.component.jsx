// Import: Packages
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getQuestionnaireResponse,
  getNotesQuestionnaireResponseDetail,
  postNewNote,
  putNewNote,
  filterForPreviousNotes,
  addPostPractionerName,
  addPostPractionerID,
  addPostPatientName,
  addPostEncounterID,
  addPostDateTime,
  addPostNote,
  addPutNote,
  addPutDateTime,
  addPutPractionerName,
} from "../../../../../redux/slices/clinicalNotesSlice";
import moment from "moment";

// Import: Elements
import { Container, Wrapper } from "./Notes.elements";

// Import: Components
import { Button, Form, NotesEntry, Text } from "../../../../components";

// SubPage: Notes
export default function Notes() {
  // Redux:
  const questionnaireResponse = useSelector(
    (state) => state.clinicalNotes.notes.questionnaireResponse
  );
  const questionnaireResponseDetail = useSelector(
    (state) => state.clinicalNotes.notes.questionnaireResponseDetail
  );
  const apiPostResponse = useSelector(
    (state) => state.clinicalNotes.notes.apiPostResponse
  );
  const apiPutResponse = useSelector(
    (state) => state.clinicalNotes.notes.apiPutResponse
  );
  const filteredQuestionnaireResponse = useSelector(
    (state) => state.clinicalNotes.notes.filteredQuestionnaireResponse
  );
  const encounterID = useSelector(
    (state) => state.selectedPatient.patientData[0].encounterID
  );
  const practionerName = useSelector(
    (state) =>
      state.userDetails.details.ControlActEvent.Subject.Value[0]
        .UserRoleProfile[0].UserID.identifierName
  );
  const practionerID = useSelector(
    (state) =>
      state.userDetails.details.ControlActEvent.Subject.Value[0]
        .UserRoleProfile[0].UserID.extension
  );
  const patientName = useSelector(
    (state) => state.selectedPatient.patientData[0].name
  );
  const dispatch = useDispatch();

  // Ref:
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
    dispatch(getQuestionnaireResponse());
    dispatch(addPostPractionerName(practionerName));
    dispatch(addPostPractionerID(practionerID));
    dispatch(addPostPatientName(patientName));
    dispatch(addPostEncounterID(encounterID));
    dispatch(addPostDateTime(putEditedNewDateTime));
    dispatch(addPutDateTime(putEditedNewDateTime));
    dispatch(addPutPractionerName(practionerName));
  }, [
    dispatch,
    encounterID,
    patientName,
    practionerID,
    practionerName,
    putEditedNewDateTime,
    apiPutResponse,
    apiPostResponse,
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

  // Add noteToRedux
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
              key={index}
              dateTime={item.dateTime}
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

          <Form>
            <Form.TextArea
              htmlFor="enterObservationNote"
              labelText="Enter observation note..."
              onChange={addNoteToRedux}
              ref={noteTextAreaRef}
              rows="8"
            />
          </Form>

          <Button
            text="Submit Note"
            onClick={submitNewNote}
            margin="0 0 2rem 0"
          />

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
