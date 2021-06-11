// Import: Packages
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  addDateTime,
  addPractitioner,
  addSeenComments,
  addSeniorReviewReason,
  addSeniorReviewReq,
} from "../../../../../redux/slices/seenSlice";

// Import: Elements
import { Container, Wrapper } from "./SeenSubPage.elements";

// Import: Components
import { Grid, Form, MoveLocation } from "../../../../components";

// SubPage: SeenSubPage
export default function SeenSubPage() {
  // Redux: useSelector, useDispatch
  const user = useSelector((state) => {
    if (state.userDetails.details.ControlActEvent) {
      return state.userDetails.details.ControlActEvent.Subject.Value[0]
        .UserRoleProfile[0].UserID.identifierName;
    }
  });
  const triageCategory = useSelector((state) => {
    if (state.selectedPatient.patientData[0]) {
      return state.selectedPatient.patientData[0].Triagecategory;
    }
  });
  const area = useSelector((state) => {
    if (state.selectedPatient.patientData[0]) {
      return state.selectedPatient.patientData[0].location;
    }
  });
  const userExtension = useSelector((state) => {
    if (state.userDetails.details.ControlActEvent) {
      return state.userDetails.details.ControlActEvent.Subject.Value[0]
        .UserRoleProfile[0].UserID.extension;
    }
  });
  const seenComments = useSelector((state) => {
    if (state.seen.seenForm.SeenComments) {
      return state.seen.seenForm.SeenComments;
    }
  });
  const seenForm = useSelector((state) => {
    if (state.seen.seenForm) {
      return state.seen.seenForm;
    }
  });
  const seniorReviewReq = useSelector((state) => {
    if (state.seen.seenForm) {
      return state.seen.seenForm.SeniorReviewReq;
    }
  });
  const dispatch = useDispatch();

  // Ref: Used for SeenSubPage form
  const seenCommentsRef = useRef();
  const seenDateRef = useRef();
  const seenReasonRef = useRef();
  const seenSeniorReviewRef = useRef();
  const seenTimeRef = useRef();

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

  // Senior Review options
  const seniorReviewOptions = ["true", "false"];

  // Reason options
  const reasonOptions = [
    "Abdominal pain in pts 70+",
    "Atraumatic chest pain in pt's 30+",
    "Fever in children under 1 yr",
    "Return with same condition <72hr after discharge",
    "Requested by Junior Doctor",
  ];

  // Add values to Redux
  const addCommentsToRedux = () => {
    dispatch(addSeenComments(seenCommentsRef.current.value));
  };
  const addReasonToRedux = () => {
    dispatch(addSeniorReviewReason(seenReasonRef.current.value));
  };
  const addSeniorReviewToRedux = () => {
    dispatch(addSeniorReviewReq(seenSeniorReviewRef.current.value));
  };

  // Effect: Populates form with current date/time and user extension on render
  useEffect(() => {
    dispatch(addDateTime(putEditedNewDateTime));
    dispatch(addPractitioner(userExtension));
  }, [dispatch, putEditedNewDateTime, userExtension]);

  // Effect: Populates Review Reason with "false" on render
  useEffect(() => {
    dispatch(addSeniorReviewReq("false"));
  }, [dispatch]);

  return (
    <>
      <Container data-testid={"seenSubPage"}>
        <Wrapper>
          <Form>
            <Grid>
              <Grid.Column>
                <Grid.Item>
                  <Form.Display htmlFor="seenBy" labelText="Seen By" subheading>
                    <p>{user ? user : "N/A"}</p>
                  </Form.Display>
                </Grid.Item>

                <Grid.Item>
                  <Form.Display
                    htmlFor="triageCategory"
                    labelText="Triage Category"
                    subheading
                  >
                    <p>{triageCategory ? triageCategory : "N/A"}</p>
                  </Form.Display>
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Input
                    defaultValue={finalDate}
                    htmlFor="seenDate"
                    labelText="Seen Date"
                    ref={seenDateRef}
                    type="date"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    defaultValue={time}
                    htmlFor="seenTime"
                    labelText="Seen Time"
                    ref={seenTimeRef}
                    type="time"
                  />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="seniorReview"
                    labelText="Senior Review"
                    onChange={addSeniorReviewToRedux}
                    options={seniorReviewOptions}
                    ref={seenSeniorReviewRef}
                    value={seenForm.SeniorReviewReq}
                  />
                </Grid.Item>

                {seniorReviewReq === "true" && (
                  <Grid.Item>
                    <Form.Dropdown
                      htmlFor="reason"
                      labelText="Reason"
                      onChange={addReasonToRedux}
                      options={reasonOptions}
                      ref={seenReasonRef}
                      value={seenForm.SeniorReviewReason}
                    />
                  </Grid.Item>
                )}

                <Grid.Item>
                  <Form.Display htmlFor="area" labelText="Area">
                    {area ? area : "N/A"}
                  </Form.Display>
                </Grid.Item>

                <Grid.Item>
                  <MoveLocation />
                </Grid.Item>
              </Grid.Column>
            </Grid>

            <Grid>
              <Grid.Column>
                <Grid.Item>
                  <Form.TextArea
                    cols="90"
                    htmlFor="comments"
                    labelText="Comments"
                    onChange={addCommentsToRedux}
                    ref={seenCommentsRef}
                    rows="4"
                    value={seenComments}
                  />
                </Grid.Item>
              </Grid.Column>
            </Grid>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
}
