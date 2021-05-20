// Import: Packages
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getQuestionnaireResponse,
  setFilteredQuestionnaireResponse,
  getQuestionnaireResponseDetail,
} from "../../../../../redux/slices/clinicalNotesSlice";

// Import: Elements
import { Container, Wrapper } from "./Notes.elements";

// Import: Components
import { Form, NotesEntry, Text } from "../../../../components";

// SubPage: Notes
export default function Notes() {
  // Redux: questionnaireResponse
  const questionnaireResponse = useSelector(
    (state) => state.clinicalNotes.notes.questionnaireResponse
  );
  const questionnaireResponseDetail = useSelector(
    (state) => state.clinicalNotes.notes.questionnaireResponseDetail
  );
  const filteredQuestionnaireResponse = useSelector(
    (state) => state.clinicalNotes.notes.filteredQuestionnaireResponse
  );
  const dispatch = useDispatch();

  // Effect: Fetches questionnaire response from API
  useEffect(() => {
    dispatch(getQuestionnaireResponse());
  }, [dispatch]);

  // Effect: Filters questionnaire responses
  useEffect(() => {
    if (questionnaireResponse && questionnaireResponse.length > 0) {
      dispatch(setFilteredQuestionnaireResponse());
    } else {
      return;
    }
  }, [dispatch, questionnaireResponse]);

  // Effect: Fetches questionnaire response detail from API
  useEffect(() => {
    dispatch(getQuestionnaireResponseDetail());
  }, [dispatch, filteredQuestionnaireResponse]);

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
              rows="8"
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
