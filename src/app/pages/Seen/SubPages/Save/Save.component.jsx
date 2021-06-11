// Import: Packages
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearApiResponse,
  clearSeenForm,
  putSeenForm,
} from "../../../../../redux/slices/seenSlice";
import { clearPatient } from "../../../../../redux/slices/selectedPatientSlice";

// Import Assets
import { ReactComponent as DashboardIcon } from "../../../../../assets/img/icon/ward-dashboard.svg";
import { ReactComponent as WorkflowIcon } from "../../../../../assets/img/icon/workflow.svg";

// Import: Elements
import {
  Container,
  IconContainer,
  Next,
  Suggestion,
  Suggestions,
  Wrapper,
} from "./Save.elements";

// Import: Components
import { Form, Grid, Text } from "../../../../components";

// SubPage: Save
export default function Save() {
  // Redux: useSelector, useDispatch
  const apiResponse = useSelector((state) => {
    if (state.seen.apiResponse) {
      return state.seen.apiResponse;
    }
  });
  const status = useSelector((state) => {
    if (state.seen.status) {
      return state.seen.status;
    }
  });
  const dispatch = useDispatch();

  // Effect: Clears down redux data on render
  useEffect(() => {
    dispatch(clearApiResponse());
  }, [dispatch]);

  // Submit data to API
  const submitSeenForm = async (event) => {
    event.preventDefault();
    try {
      dispatch(putSeenForm());
      dispatch(clearSeenForm());
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

          <Form onSubmit={submitSeenForm}>
            <Grid>
              <Grid.Column>
                <Grid.Item>
                  <Form.Button
                    onClick={submitSeenForm}
                    text="Save Seen"
                    type="submit"
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
                        onClick={() => dispatch(clearPatient())}
                        to="/one-ed/ward/dashboard"
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
                      <Link to="/one-ed/assessments/clinical-notes">
                        <Suggestion>
                          <IconContainer>
                            <WorkflowIcon />
                          </IconContainer>

                          <span>Continue workflow</span>
                          <Next>Next: Clinical Notes</Next>
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
