// Import: Packages
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  addDateTime,
  addSeenComments,
  addSeniorReviewReq,
  addSeniorReviewReason,
  addPractitioner,
} from "../../../../../redux/slices/seenSlice";

// Import: Elements
import { Container, Wrapper } from "./SeenSubPage.elements";

// Import: Components
import { Grid, Form, MoveLocation } from "../../../../components";

// SubPage: SeenSubPage
export default function SeenSubPage() {
  // Redux: Fetches from the global state
  const user = useSelector(
    (state) =>
      state.userDetails.details.ControlActEvent.Subject.Value[0]
        .UserRoleProfile[0].UserID.identifierName
  );
  const area = useSelector(
    (state) => state.selectedPatient.patientData[0].location
  );
  const userExtension = useSelector(
    (state) =>
      state.userDetails.details.ControlActEvent.Subject.Value[0]
        .UserRoleProfile[0].UserID.extension
  );
  const seenComments = useSelector((state) => state.seen.seenForm.SeenComments);
  const seenForm = useSelector((state) => state.seen.seenForm);
  const seniorReviewReq = useSelector(
    (state) => state.seen.seenForm.SeniorReviewReq
  );
  const dispatch = useDispatch();

  // Ref:
  const seenDateRef = useRef();
  const seenTimeRef = useRef();
  const seenSeniorReviewRef = useRef();
  const seenReasonRef = useRef();
  const seenCommentsRef = useRef();

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
  const addSeniorReviewToRedux = () => {
    dispatch(addSeniorReviewReq(seenSeniorReviewRef.current.value));
  };
  const addReasonToRedux = () => {
    dispatch(addSeniorReviewReason(seenReasonRef.current.value));
  };
  const addCommentsToRedux = () => {
    dispatch(addSeenComments(seenCommentsRef.current.value));
  };

  // Effect:
  useEffect(() => {
    dispatch(addDateTime(putEditedNewDateTime));
    // dispatch(addSeenComments("This is a test - seen comment"));
    // dispatch(addSeniorReviewReq("This is a test - senior review req"));
    // dispatch(addSeniorReviewReason("This is a test - senior review reason"));
    dispatch(addPractitioner(userExtension));
  }, [dispatch, putEditedNewDateTime, userExtension]);

  return (
    <>
      <Container data-testid={"seenSubPage"}>
        <Wrapper>
          <Form>
            <Grid>
              <Grid.Column>
                <Grid.Item>
                  <Form.Display htmlFor="seenBy" labelText="Seen By" subheading>
                    <p>{user}</p>
                  </Form.Display>
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="seenDate"
                    labelText="Seen Date"
                    ref={seenDateRef}
                    type="date"
                    defaultValue={finalDate}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="seenTime"
                    labelText="Seen Time"
                    ref={seenTimeRef}
                    type="time"
                    defaultValue={time}
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
                    defaultValue="false"
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
                    {/* TODO should be something like ED Waiting room, see if there is a more approprite piece of date to use here. */}
                    {area}
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
