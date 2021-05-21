// Import: Packages
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterForPreviousObs,
  getQuestionnaireResponse,
  getObsQuestionnaireResponseDetail,
} from "../../../../../redux/slices/clinicalNotesSlice";

// Import: Elements
import { Container, Wrapper } from "./Obs.elements";

// Import: Components
import { Text } from "../../../../components";

// SubPage: Obs
export default function Obs() {
  // Redux:
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
      dispatch(filterForPreviousObs());
    } else {
      return;
    }
  }, [dispatch, questionnaireResponse]);

  // Effect: Fetches questionnaire response detail from API
  useEffect(() => {
    dispatch(getObsQuestionnaireResponseDetail());
  }, [dispatch, filteredQuestionnaireResponse]);

  // Maps questionnaireResponseDetail through Obs
  const previousObsRender =
    questionnaireResponseDetail && questionnaireResponseDetail.length > 0
      ? questionnaireResponseDetail.map(function (item, index) {
          return (
            <div key={index}>
              <p>SysObsNeuroPainScore: {item.SysObsNeuroPainScore}</p>
            </div>
          );
        })
      : null;

  return (
    <>
      <Container data-testid={"obs"}>
        <Wrapper>
          <Text as="h2" heading>
            Obs
          </Text>

          {questionnaireResponseDetail &&
          questionnaireResponseDetail.length > 0 ? (
            previousObsRender
          ) : (
            <Text as="p">The Patient has no historic notes</Text>
          )}
        </Wrapper>
      </Container>
    </>
  );
}
