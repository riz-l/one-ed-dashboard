// Import: Packages
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  postPopsAssessment,
  clearPopsAssessment,
  clearPopsAssessmentApiResponse,
} from "../../../../../redux/slices/triageSlice";
import { clearPatient } from "../../../../../redux/slices/selectedPatientSlice";

// Import Assets
import { ReactComponent as DashboardIcon } from "../../../../../assets/img/icon/ward-dashboard.svg";
import { ReactComponent as WorkflowIcon } from "../../../../../assets/img/icon/workflow.svg";

// Import: Elements
import {
  Container,
  IconContainer,
  Suggestion,
  Suggestions,
  Wrapper,
} from "./Save.elements";

// Import: Components
import { Form, Grid, Text } from "../../../../components";

// SubPage: Save
export default function Save() {
  // Redux:
  const apiResponse = useSelector(
    (state) => state.triage.popsAssessmentApiResponse
  );
  const status = useSelector((state) => state.triage.status);
  const dispatch = useDispatch();

  // Effect:
  useEffect(() => {
    dispatch(clearPopsAssessmentApiResponse());
  }, [dispatch]);

  // Submit POPS Assessment to API
  const submitPopsAssessmentForm = async (event) => {
    event.preventDefault();

    try {
      dispatch(postPopsAssessment());
      dispatch(clearPopsAssessment());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Container data-testid={"save"}>
        <Wrapper>
          <Text as="h2" heading>
            Save
          </Text>

          <Form onSubmit={submitPopsAssessmentForm}>
            <Grid>
              <Grid.Column>
                <Grid.Item>
                  <Form.Button
                    type="submit"
                    text="Save POPS Assessment"
                    onClick={submitPopsAssessmentForm}
                  />
                </Grid.Item>

                {apiResponse === "HTTP Response Code: 200" ||
                (apiResponse && apiResponse.response) ||
                status === "failed" ? (
                  <Form.Display
                    htmlFor="submissionResponse"
                    style={
                      apiResponse === "HTTP Response Code: 200"
                        ? { color: "#008ba3" }
                        : (apiResponse && apiResponse.response) ||
                          status === "failed"
                        ? { color: "tomato" }
                        : null
                    }
                  >
                    {apiResponse === "HTTP Response Code: 200"
                      ? "Submission Successful"
                      : (apiResponse && apiResponse.response) ||
                        status === "failed"
                      ? "Submission Failed"
                      : null}
                  </Form.Display>
                ) : null}

                <Grid.Item horizontal>
                  <Suggestions>
                    <Grid.Item>
                      <Link
                        to="/one-ed/ward/dashboard"
                        onClick={() => dispatch(clearPatient())}
                      >
                        <Suggestion>
                          <IconContainer>
                            <DashboardIcon />
                          </IconContainer>

                          <span>Return to Dashboard</span>
                        </Suggestion>
                      </Link>
                    </Grid.Item>

                    <Grid.Item>
                      <Link to="/one-ed/assessments/seen">
                        <Suggestion>
                          <IconContainer>
                            <WorkflowIcon />
                          </IconContainer>

                          <span>Continue workflow</span>
                          <span style={{ fontWeight: "500" }}>Next: Seen</span>
                        </Suggestion>
                      </Link>
                    </Grid.Item>
                  </Suggestions>
                </Grid.Item>
              </Grid.Column>
            </Grid>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
}
