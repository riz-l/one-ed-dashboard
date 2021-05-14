// Import: Packages
import React, { useEffect } from "react";
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
  // Redux: Extracts currently logged in user from global state
  const user = useSelector(
    (state) =>
      state.userDetails.details.ControlActEvent.Subject.Value[0]
        .UserRoleProfile[0].UserID.extension
  );
  const location = useSelector(
    (state) => state.selectedPatient.patientData[0].location
  );
  const startDate = useSelector(
    (state) => state.selectedPatient.patientData[0].StartDate
  );
  const patient = useSelector((state) => state.selectedPatient.patient);
  const triageData = useSelector((state) => state.triage.triageForm);
  const dispatch = useDispatch();

  // Current Date, Time
  const date = new Date();
  const formattedDate = date.toISOString().substr(0, 10);
  // console.log("formattedDate: ", formattedDate);
  const time = date.toLocaleTimeString();
  // const finalDate = moment(formattedDate).format("YYYY-MM-DD");
  const finalDate = moment("2021-05-10").format("YYYY-MM-DD");
  // console.log("finalDate: ", finalDate);
  const putDateTime = finalDate.concat("T", time, "Z");

  // Effect:
  useEffect(() => {
    dispatch(addPatientID(patient));
    dispatch(addDateTime(putDateTime));
    dispatch(addTriageCategory("Very urgent"));
    dispatch(addTriageDiagnosis("Dizziness - light-headed"));
    dispatch(addTriageDiagnosisCode("386705008"));
    dispatch(addPractitioner(user));
    dispatch(putTriageForm());
  }, [dispatch]);

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
                    {startDate}
                  </Form.Display>
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="Triage Date"
                    labelText="Triage Date"
                    type="date"
                    value={formattedDate}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="Triage Time"
                    labelText="Triage Time"
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
                    {user}
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
