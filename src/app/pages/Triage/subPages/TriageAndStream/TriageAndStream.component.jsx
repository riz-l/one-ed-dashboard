// Import: Packages
import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  putTriageForm,
  addTriageFormPatientID,
  addTriageFormDateTime,
  addTriageFormTriageCategory,
  addTriageFormTriageDiagnosis,
  addTriageFormTriageDiagnosisCode,
  addTriageFormPractitioner,
  clearTriageForm,
  clearTriageFormApiResponse,
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
  const formattedStartDate = moment(startDate).format("MMMM Do YYYY, HH:mm:ss");
  // const formattedStartDate = moment(startDate).format("YYYY-MM-DD, HH:mm");
  const patient = useSelector((state) => state.selectedPatient.patient);
  const apiResponse = useSelector(
    (state) => state.triage.triageFormApiResponse
  );
  const triageForm = useSelector((state) => state.triage.triageForm);
  const dispatch = useDispatch();

  // Ref:
  const triageDateRef = useRef();
  const triageTimeRef = useRef();
  const triageDiagnosisRef = useRef();
  const triageCategoryRef = useRef();

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

  // Effect:
  useEffect(() => {
    dispatch(addTriageFormPatientID(patient));
    dispatch(addTriageFormDateTime(putEditedNewDateTime));
    // dispatch(addTriageFormTriageCategory("Very urgent"));
    // dispatch(addTriageFormTriageDiagnosis("Dizziness - light-headed"));
    // dispatch(addTriageFormTriageDiagnosisCode("386705008"));
    dispatch(addTriageFormPractitioner(userExtension));
  }, [dispatch, patient, putEditedNewDateTime, userExtension]);

  // Effect:
  useEffect(() => {
    dispatch(clearTriageFormApiResponse());
  }, [dispatch]);

  // Submit data to API
  const submitTriageAndStreamForm = async (event) => {
    event.preventDefault();
    const triageDate = triageDateRef.current.value;
    const triageTime = triageTimeRef.current.value;
    if (triageDate === "" || triageTime === "") return;

    try {
      dispatch(putTriageForm());
      dispatch(clearTriageForm());
      dispatch(addTriageFormPatientID(patient));
      dispatch(addTriageFormDateTime(putEditedNewDateTime));
      // dispatch(addTriageFormTriageDiagnosisCode("386705008"));
      dispatch(addTriageFormPractitioner(userExtension));
    } catch (err) {
      console.log(err);
    }
  };

  // Dropdown options
  const dropdownOptions = [
    "Immediate",
    "Very Urgent",
    "Urgent",
    "Standard",
    "Non-urgent",
  ];

  // Autosuggest options
  const autoSuggestOptions = [
    {
      name: "Breathlessness",
      code: "267036007",
    },
    {
      name: "Dizziness - light-headed",
      code: "386705008",
    },
    {
      name: "Swelling of lower leg",
      code: "449615005",
    },
    {
      name: "Shoulder pain",
      code: "45326000",
    },
    {
      name: "Gas poisoning",
      code: "57335002",
    },
    {
      name: "Red eye",
      code: "75705005",
    },
    {
      name: "Medication requested",
      code: "182888003",
    },
    {
      name: "Injury of head",
      code: "82271004",
    },
    {
      name: "Ocular pain",
      code: "41652007",
    },
    {
      name: "General weakness",
      code: "13791008",
    },
  ];

  // Add values to Redux
  const addTriageCategoryToRedux = () => {
    dispatch(addTriageFormTriageCategory(triageCategoryRef.current.value));
  };

  return (
    <>
      <Container data-testid={"triageAndStream"}>
        <Wrapper>
          <Text heading as="h2">
            Triage
          </Text>

          <Form onSubmit={submitTriageAndStreamForm}>
            <Grid>
              <Grid.Column>
                <Grid.Item>
                  <Form.Display
                    htmlFor="arrivalDateTime"
                    labelText="Arrival Date/Time"
                  >
                    {formattedStartDate}
                  </Form.Display>
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="triageDate"
                    labelText="Triage Date"
                    readonly
                    ref={triageDateRef}
                    type="date"
                    defaultValue={finalDate}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="triageTime"
                    labelText="Triage Time"
                    readonly
                    ref={triageTimeRef}
                    type="time"
                    defaultValue={time}
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
                    htmlFor="triageDiagnosis"
                    labelText="Triage Diagnosis"
                    onChange={addTriageFormTriageDiagnosis}
                    codeOnChange={addTriageFormTriageDiagnosisCode}
                    options={autoSuggestOptions}
                    ref={triageDiagnosisRef}
                    placeholder="Triage diagnosis..."
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="Triage Category"
                    labelText="Triage Category"
                    onChange={addTriageCategoryToRedux}
                    options={dropdownOptions}
                    ref={triageCategoryRef}
                    value={triageForm.TriageCategory}
                  />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Display htmlFor="Triage By" labelText="Triage By">
                    {userName}
                  </Form.Display>
                </Grid.Item>

                {/* TODO Waiting for the Allergy API to be ready so the 2 fields below can be linked to it. */}
                {/* 
                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="checkAllergies"
                    labelText="Check Allergies"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.TextArea
                    cols="13"
                    htmlFor="checkAllergiesComments"
                    labeltext="Comments"
                    rows="5"
                  />
                </Grid.Item> */}
              </Grid.Column>
            </Grid>

            <Form.Button
              text="Save Form"
              type="submit"
              margin="0 0 1rem 0"
              onClick={submitTriageAndStreamForm}
            />

            {apiResponse === "HTTP Response Code: 200" ||
            (apiResponse && apiResponse.response) ? (
              <Form.Display
                htmlFor="submissionResponse"
                style={
                  apiResponse === "HTTP Response Code: 200"
                    ? { color: "#008ba3" }
                    : apiResponse && apiResponse.response
                    ? { color: "tomato" }
                    : null
                }
              >
                {apiResponse === "HTTP Response Code: 200"
                  ? "Submission Successful"
                  : apiResponse && apiResponse.response
                  ? "Submission Failed"
                  : null}
              </Form.Display>
            ) : null}
          </Form>
        </Wrapper>
      </Container>
    </>
  );
}
