// Import: Packages
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterForPreviousObs,
  getQuestionnaireResponse,
} from "../../../../../redux/slices/clinicalNotesSlice";

// Import: Elements
import { Container, Wrapper } from "./POPSHistory.elements";

// Import: Components
import { POPSHistoryModal, Text } from "../../../../components";

// SubPage: POPSHistory
export default function POPSHistory() {
  // Redux:
  const questionnaireResponse = useSelector(
    (state) => state.clinicalNotes.notes.questionnaireResponse
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
      dispatch(filterForPreviousObs());
    } else {
      return;
    }
  }, [dispatch, questionnaireResponse]);

  // Maps filteredQuestionnaireResponse through Obs
  const previousObsRender =
    filteredQuestionnaireResponse && filteredQuestionnaireResponse.length > 0
      ? filteredQuestionnaireResponse.map(function (item, index) {
          return (
            <POPSHistoryModal
              key={index}
              id={item.id}
              dateTime={item.alertStatus[2].valueDateTime}
              status={item.status}
              user={item.alertStatus[1].valueString}
            />
          );
        })
      : null;

  return (
    <>
      <Container data-testid={"popsHistory"}>
        <Wrapper>
          <Text as="h2" heading>
            POPS History
          </Text>

          {filteredQuestionnaireResponse &&
          filteredQuestionnaireResponse.length > 0 ? (
            previousObsRender
          ) : (
            <Text as="p">The Patient has no POPS history</Text>
          )}
        </Wrapper>
      </Container>
    </>
  );
}
