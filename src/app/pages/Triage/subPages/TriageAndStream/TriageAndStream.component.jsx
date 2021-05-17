// Import: Packages
import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  putTriageForm,
  addPatientID,
  addDateTime,
  addTriageCategory,
  addTriageDiagnosis,
  addTriageDiagnosisCode,
  addPractitioner,
  // clearTriageForm,
} from "../../../../../redux/slices/triageSlice";
import moment from "moment";

// Import: Elements
import { Container, Wrapper } from "./TriageAndStream.elements";

// Import: Components
import { Form, Grid, Text } from "../../../../components";

// SubPage: TriageAndStream
export default function TriageAndStream() {
  // Redux:
  const userExtension = useSelector(
    (state) =>
      state.userDetails.details.ControlActEvent.Subject.Value[0]
        .UserRoleProfile[0].UserID.extension
  );
  const userName = useSelector(
    (state) =>
      state.userDetails.details.ControlActEvent.Subject.Value[0]
        .UserRoleProfile[0].UserID.identifierName
  );
  const location = useSelector(
    (state) => state.selectedPatient.patientData[0].location
  );
  const startDate = useSelector(
    (state) => state.selectedPatient.patientData[0].StartDate
  );
  const formattedStartDate = moment(startDate).format("YYYY-MM-DD, HH:mm");
  const patient = useSelector((state) => state.selectedPatient.patient);
  const dispatch = useDispatch();

  // Ref:
  const triageDateRef = useRef();
  const triageTimeRef = useRef();

  // Current Date, Time
  const date = new Date();
  const formattedDate = date.toISOString().substr(0, 10);
  const time = date.toLocaleTimeString(); // Triage Time
  const finalDate = moment(formattedDate).format("YYYY-MM-DD"); // Triage Date
  const putDateTime = finalDate.concat("T", time, "Z");
  const newDateTime = new Date(putDateTime);
  newDateTime.setHours(newDateTime.getHours() - 2);
  const newTime = newDateTime.toLocaleTimeString();
  const editedNewDateTime = moment(newDateTime).format("YYYY-MM-DD");
  const putEditedNewDateTime = editedNewDateTime.concat("T", newTime, "Z");

  // Effect:
  useEffect(() => {
    dispatch(addPatientID(patient));
    dispatch(addDateTime(putEditedNewDateTime));
    dispatch(addTriageCategory("Very urgent"));
    dispatch(addTriageDiagnosis("Dizziness - light-headed"));
    dispatch(addTriageDiagnosisCode("386705008"));
    dispatch(addPractitioner(userExtension));
    dispatch(putTriageForm());
  }, [dispatch, patient, putEditedNewDateTime, userExtension]);

  return (
    <>
      <Container data-testid={"triageAndStream"}>
        <Wrapper>
          <Text heading as="h2">
            Triage
          </Text>

          <Form>
            <Grid>
              <Grid.Column>
                <Grid.Item>
                  <Form.Display
                    htmlFor="Arrival Date/Time"
                    labelText="Arrival Date/Time"
                  >
                    {formattedStartDate}
                  </Form.Display>
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="Triage Date"
                    labelText="Triage Date"
                    readonly
                    ref={triageDateRef}
                    type="date"
                    value={finalDate}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="Triage Time"
                    labelText="Triage Time"
                    readonly
                    ref={triageTimeRef}
                    type="time"
                    value={time}
                  />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Display htmlFor="Location" labelText="Location">
                    {location}
                  </Form.Display>
                </Grid.Item>

                <Grid.Item>
                  <Form.AutoSuggest
                    htmlFor="Chief Complaint"
                    labelText="Chief Complaint"
                    placeholder="Chief Complaint..."
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="Triage Category"
                    labelText="Triage Category"
                  />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Display htmlFor="Triage By" labelText="Triage By">
                    {userName}
                  </Form.Display>
                </Grid.Item>
              </Grid.Column>
            </Grid>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
}
