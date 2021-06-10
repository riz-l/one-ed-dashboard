// Import: Packages
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  // Redux: useSelector, useDispatch
  const userExtension = useSelector((state) => {
    if (state.userDetails.details.ControlActEvent) {
      return state.userDetails.details.ControlActEvent.Subject.Value[0]
        .UserRoleProfile[0].UserID.extension;
    }
  });
  const userName = useSelector((state) => {
    if (state.userDetails.details.ControlActEvent) {
      return state.userDetails.details.ControlActEvent.Subject.Value[0]
        .UserRoleProfile[0].UserID.identifierName;
    }
  });
  const location = useSelector((state) => {
    if (state.selectedPatient.patientData[0]) {
      return state.selectedPatient.patientData[0].location;
    }
  });
  const startDate = useSelector((state) => {
    if (state.selectedPatient.patientData[0]) {
      return state.selectedPatient.patientData[0].StartDate;
    }
  });
  const patient = useSelector((state) => {
    if (state.selectedPatient.patient) {
      return state.selectedPatient.patient;
    }
  });
  const apiResponse = useSelector((state) => {
    if (state.triage.triageFormApiResponse) {
      return state.triage.triageFormApiResponse;
    }
  });
  const triageForm = useSelector((state) => {
    if (state.triage.triageForm) {
      return state.triage.triageForm;
    }
  });
  const dispatch = useDispatch();

  // Ref: Used for TriageAndStream form
  const triageCategoryRef = useRef();
  const triageDateRef = useRef();
  const triageDiagnosisRef = useRef();
  const triageTimeRef = useRef();

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
  const formattedStartDate = moment(startDate).format("MMMM Do YYYY, HH:mm:ss");

  // Effect:
  useEffect(() => {
    dispatch(addTriageFormDateTime(putEditedNewDateTime));
    dispatch(addTriageFormPatientID(patient));
    dispatch(addTriageFormPractitioner(userExtension));
  }, [dispatch, patient, putEditedNewDateTime, userExtension]);

  // Effect: Clear down redux data on render
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
      dispatch(addTriageFormPatientID(patient));
      dispatch(addTriageFormDateTime(putEditedNewDateTime));
      dispatch(addTriageFormPractitioner(userExtension));
      dispatch(putTriageForm());
      dispatch(clearTriageForm());
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
    {
      name: "Fever",
      code: "386661006",
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
                    codeOnChange={addTriageFormTriageDiagnosisCode}
                    htmlFor="triageDiagnosis"
                    labelText="Triage Diagnosis"
                    onChange={addTriageFormTriageDiagnosis}
                    options={autoSuggestOptions}
                    placeholder="Triage diagnosis..."
                    ref={triageDiagnosisRef}
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
              </Grid.Column>
            </Grid>

            <Form.Button
              margin="0 0 1rem 0"
              onClick={submitTriageAndStreamForm}
              text="Save Form"
              type="submit"
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
