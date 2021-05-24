import React from "react";
import { useSelector } from "react-redux";

import {
  AlignData,
  AlignData1,
  AlignData2,
  FormWrapper,
  Heading,
  HeadingContent,
  HeadingImage,
} from "./PatientDetails.elements";

import { Display, Grid } from "../../components";
import { ReactComponent as UserIcon } from "../../../assets/img/icon/user.svg";

export default function PatientDetails() {
  // Redux: Extracts Patient Data from the global state
  const patientData = useSelector((state) => state.selectedPatient.patientData);

  return (
    <FormWrapper>
      <Heading>
        <HeadingImage>
          <UserIcon />
        </HeadingImage>

        <HeadingContent>
          <h2>
            {patientData[0].name === "undefined"
              ? "N/A"
              : patientData[0].name
              ? patientData[0].name
              : "N/A"}
          </h2>
          <AlignData>
            <AlignData1>
              <Display htmlFor="gender" margin="0" type="text" left>
                {patientData[0].gender === "undefined" ? (
                  "N/A"
                ) : patientData[0].gender ? (
                  <span style={{ textTransform: "capitalize" }}>
                    {patientData[0].gender + ","}
                  </span>
                ) : (
                  "N/A"
                )}
              </Display>
            </AlignData1>

            <AlignData2>
              <Display htmlFor="age" type="text" left padding="0 0 1rem 0">
                {patientData[0].age === "undefined"
                  ? "N/A"
                  : patientData[0].age
                  ? patientData[0].age
                  : "N/A"}
              </Display>
            </AlignData2>
          </AlignData>

          <Grid>
            <Grid.Column>
              <Display
                htmlFor="dateOfBirth"
                labelText="Date of Birth"
                type="text"
              >
                {patientData[0].dob === "undefined"
                  ? "N/A"
                  : patientData[0].dob
                  ? patientData[0].dob
                  : "N/A"}
              </Display>

              <Display htmlFor="nhsNo" labelText="NHS No." type="text">
                {patientData[0].NHSNo === "undefined"
                  ? "N/A"
                  : patientData[0].NHSNo
                  ? patientData[0].NHSNo
                  : "N/A"}
              </Display>

              <Display htmlFor="ethnicity" labelText="Ethnicity" type="text">
                {patientData[0].ethnicity === "undefined"
                  ? "N/A"
                  : patientData[0].ethnicity
                  ? patientData[0].ethnicity
                  : "N/A"}
              </Display>
            </Grid.Column>

            <Grid.Column>
              <Display htmlFor="patientID" labelText="Patient ID" type="text">
                {patientData[0].patientID === "undefined"
                  ? "N/A"
                  : patientData[0].patientID
                  ? patientData[0].patientID
                  : "N/A"}
              </Display>

              <Display
                margin="0 0 0 0"
                htmlFor="addressOne"
                labelText="Address"
                type="text"
              >
                {patientData[0].add1 === "undefined"
                  ? "N/A"
                  : patientData[0].add1
                  ? patientData[0].add1
                  : "N/A"}
              </Display>

              <Display htmlFor="addressTwo" type="text">
                {patientData[0].add2 === "undefined"
                  ? "N/A"
                  : patientData[0].add2
                  ? patientData[0].add2
                  : "N/A"}
              </Display>

              <Display htmlFor="addressThree" type="text">
                {patientData[0].add3 === "undefined"
                  ? "N/A"
                  : patientData[0].add3
                  ? patientData[0].add3
                  : "N/A"}
              </Display>

              <Display htmlFor="addressFour" type="text">
                {patientData[0].add4 === "undefined"
                  ? "N/A"
                  : patientData[0].add4
                  ? patientData[0].add4
                  : "N/A"}
              </Display>
            </Grid.Column>

            <Grid.Column>
              <Grid.Item>
                {patientData[0].telecom1 ? (
                  <Display
                    htmlFor="contactOne"
                    labelText={
                      patientData[0].telecom1.use
                        ? patientData[0].telecom1.use + ":"
                        : patientData[0].telecom1.system + ":"
                    }
                  >
                    {patientData[0].telecom1.value.split("mailto:").pop()}
                  </Display>
                ) : null}
              </Grid.Item>

              <Grid.Item>
                {patientData[0].telecom2 ? (
                  <Display
                    htmlFor="contactOne"
                    labelText={
                      patientData[0].telecom2.use
                        ? patientData[0].telecom2.use + ":"
                        : patientData[0].telecom2.system + ":"
                    }
                  >
                    {patientData[0].telecom2.value.split("mailto:").pop()}
                  </Display>
                ) : null}
              </Grid.Item>

              <Grid.Item>
                {patientData[0].telecom3 ? (
                  <Display
                    htmlFor="contactOne"
                    labelText={
                      patientData[0].telecom3.use
                        ? patientData[0].telecom3.use + ":"
                        : patientData[0].telecom3.system + ":"
                    }
                  >
                    {patientData[0].telecom3.value.split("mailto:").pop()}
                  </Display>
                ) : null}
              </Grid.Item>

              <Grid.Item>
                {patientData[0].telecom4 ? (
                  <Display
                    htmlFor="contactOne"
                    labelText={
                      patientData[0].telecom4.use
                        ? patientData[0].telecom4.use + ":"
                        : patientData[0].telecom4.system + ":"
                    }
                  >
                    {patientData[0].telecom4.value.split("mailto:").pop()}
                  </Display>
                ) : null}
              </Grid.Item>
            </Grid.Column>
          </Grid>
        </HeadingContent>
      </Heading>
    </FormWrapper>
  );
}
