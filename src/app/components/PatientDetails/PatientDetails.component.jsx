// Import: Packges
import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";

// Import: Utils
import { capitalizeFirstLetter } from "../../../utils/capitalizeFirstLetter";

// Import: Assets
import { ReactComponent as UserIcon } from "../../../assets/img/icon/user.svg";

// Import: Elements
import {
  Container,
  Content,
  ContentContainer,
  IconContainer,
  Wrapper,
} from "./PatientDetails.elements";

// Import: Components
import { Display, Grid, Text } from "../../components";

// Component: PatientDetails
export default function PatientDetails() {
  // Redux: useSelector
  const selectedPatient = useSelector((state) => {
    if (state.selectedPatient) {
      return state.selectedPatient;
    }
  });

  return (
    <Container data-testid={"patientDetails"}>
      <Wrapper>
        <IconContainer>
          <UserIcon />
        </IconContainer>

        <ContentContainer>
          <Content>
            <Grid style={{ padding: "1rem" }}>
              <Grid.Column alignItems="center" justifyContent="center">
                <Grid.Item margin="0">
                  <Text heading>
                    {selectedPatient.patientData[0] &&
                    selectedPatient.patientData[0].name === "undefined"
                      ? "N/A"
                      : selectedPatient.patientData[0] &&
                        selectedPatient.patientData[0].name
                      ? capitalizeFirstLetter(
                          selectedPatient.patientData[0].name
                        )
                      : "N/A"}
                  </Text>

                  <Text bold>
                    <span>
                      {selectedPatient.patientData[0] &&
                      selectedPatient.patientData[0].gender === "undefined"
                        ? "N/A"
                        : selectedPatient.patientData[0] &&
                          selectedPatient.patientData[0].gender
                        ? capitalizeFirstLetter(
                            selectedPatient.patientData[0].gender
                          ) +
                          "," +
                          " "
                        : "N/A"}
                    </span>
                    <span>
                      {selectedPatient.patientData[0] &&
                      selectedPatient.patientData[0].age === "undefined"
                        ? "N/A"
                        : selectedPatient.patientData[0] &&
                          selectedPatient.patientData[0].age
                        ? selectedPatient.patientData[0].age
                        : "N/A"}
                    </span>
                  </Text>
                </Grid.Item>
              </Grid.Column>

              <Grid.Column alignItems="center" justifyContent="center">
                <Grid.Item margin="0">
                  <Display
                    fontSize="0.9rem"
                    htmlFor="dateOfBirth"
                    labelText="Date of Birth:"
                    left
                    margin="0"
                    type="text"
                  >
                    {selectedPatient.patientData[0] &&
                    selectedPatient.patientData[0].dob === "undefined"
                      ? "N/A"
                      : selectedPatient.patientData[0] &&
                        selectedPatient.patientData[0].dob
                      ? moment(selectedPatient.patientData[0].dob).format(
                          "MMMM Do YYYY"
                        )
                      : "N/A"}
                  </Display>

                  <Display
                    fontSize="0.9rem"
                    htmlFor="nhsNo"
                    labelText="NHS No.:"
                    left
                    margin="0"
                    type="text"
                  >
                    {selectedPatient.patientData[0] &&
                    selectedPatient.patientData[0].NHSNo === "undefined"
                      ? "N/A"
                      : selectedPatient.patientData[0] &&
                        selectedPatient.patientData[0].NHSNo
                      ? selectedPatient.patientData[0].NHSNo
                      : "N/A"}
                  </Display>

                  <Display
                    fontSize="0.9rem"
                    htmlFor="ethnicity"
                    labelText="Ethnicity:"
                    left
                    margin="0"
                    type="text"
                  >
                    {selectedPatient.patientData[0] &&
                    selectedPatient.patientData[0].ethnicity === "undefined"
                      ? "N/A"
                      : selectedPatient.patientData[0] &&
                        selectedPatient.patientData[0].ethnicity
                      ? selectedPatient.patientData[0].ethnicity
                      : "N/A"}
                  </Display>
                </Grid.Item>
              </Grid.Column>

              <Grid.Column alignItems="center" justifyContent="center">
                <Grid.Item margin="0">
                  <Text fontSize="0.9rem">Address:</Text>
                  <Text bold fontSize="0.9rem">
                    {(selectedPatient.patientData[0] &&
                      selectedPatient.patientData[0].add1) ||
                    (selectedPatient.patientData[0] &&
                      selectedPatient.patientData[0].add2) ||
                    (selectedPatient.patientData[0] &&
                      selectedPatient.patientData[0].add3) ||
                    (selectedPatient.patientData[0] &&
                      selectedPatient.patientData[0].add4) ? (
                      <>
                        {selectedPatient.patientData[0] &&
                        selectedPatient.patientData[0].add1
                          ? selectedPatient.patientData[0].add1 + ", "
                          : "N/A"}
                        {selectedPatient.patientData[0] &&
                        selectedPatient.patientData[0].add2
                          ? selectedPatient.patientData[0].add2 + ", "
                          : "N/A"}
                        <br />
                        {selectedPatient.patientData[0] &&
                        selectedPatient.patientData[0].add3
                          ? selectedPatient.patientData[0].add3 + ", "
                          : "N/A"}
                        {selectedPatient.patientData[0] &&
                        selectedPatient.patientData[0].add4
                          ? selectedPatient.patientData[0].add4 + ", "
                          : "N/A"}
                      </>
                    ) : (
                      "N/A"
                    )}
                  </Text>
                </Grid.Item>
              </Grid.Column>

              <Grid.Column alignItems="center" justifyContent="center">
                <Grid.Item margin="0">
                  {selectedPatient.patientData[0] &&
                  selectedPatient.patientData[0].telecom1 ? (
                    <Display
                      fontSize="0.9rem"
                      htmlFor="contactOne"
                      labelText={
                        selectedPatient.patientData[0].telecom1.use
                          ? selectedPatient.patientData[0].telecom1.use + ":"
                          : selectedPatient.patientData[0].telecom1.system + ":"
                      }
                      left
                      margin="0"
                    >
                      {selectedPatient.patientData[0].telecom1.value
                        .split("mailto:")
                        .pop()}
                    </Display>
                  ) : null}

                  {selectedPatient.patientData[0] &&
                  selectedPatient.patientData[0].telecom2 ? (
                    <Display
                      fontSize="0.9rem"
                      htmlFor="contactOne"
                      labelText={
                        selectedPatient.patientData[0].telecom2.use
                          ? selectedPatient.patientData[0].telecom2.use + ":"
                          : selectedPatient.patientData[0].telecom2.system + ":"
                      }
                      left
                      margin="0"
                    >
                      {selectedPatient.patientData[0].telecom2.value
                        .split("mailto:")
                        .pop()}
                    </Display>
                  ) : null}

                  {selectedPatient.patientData[0] &&
                  selectedPatient.patientData[0].telecom3 ? (
                    <Display
                      fontSize="0.9rem"
                      htmlFor="contactOne"
                      labelText={
                        selectedPatient.patientData[0].telecom3.use
                          ? selectedPatient.patientData[0].telecom3.use + ":"
                          : selectedPatient.patientData[0].telecom3.system + ":"
                      }
                      left
                      margin="0"
                    >
                      {selectedPatient.patientData[0].telecom3.value
                        .split("mailto:")
                        .pop()}
                    </Display>
                  ) : null}

                  {selectedPatient.patientData[0] &&
                  selectedPatient.patientData[0].telecom4 ? (
                    <Display
                      fontSize="0.9rem"
                      htmlFor="contactOne"
                      labelText={
                        selectedPatient.patientData[0].telecom4.use
                          ? selectedPatient.patientData[0].telecom4.use + ":"
                          : selectedPatient.patientData[0].telecom4.system + ":"
                      }
                      left
                      margin="0"
                    >
                      {selectedPatient.patientData[0].telecom4.value
                        .split("mailto:")
                        .pop()}
                    </Display>
                  ) : null}
                </Grid.Item>
              </Grid.Column>
            </Grid>
          </Content>
        </ContentContainer>
      </Wrapper>
    </Container>
  );
}
