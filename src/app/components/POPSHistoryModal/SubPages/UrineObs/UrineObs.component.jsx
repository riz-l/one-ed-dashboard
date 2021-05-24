// Import: Packages
import React from "react";
import { useSelector } from "react-redux";

// Import: Elements
import { Container, Wrapper } from "./UrineObs.elements";

// Import: Components
import { Display, Grid, Text } from "../../..";

// SubPage: UrineObs
export default function UrineObs() {
  // Redux:
  const questionnaireResponseDetail = useSelector(
    (state) => state.clinicalNotes.notes.questionnaireResponseDetail
  );

  return (
    <>
      <Container data-testid={"urineObs"}>
        <Wrapper>
          <Text as="h2" heading>
            Urine Obs
          </Text>

          <Grid>
            <Grid.Column>
              <Grid.Item>
                <Display htmlFor="nad" labelText="NAD">
                  {questionnaireResponseDetail.AdminNAD
                    ? questionnaireResponseDetail.AdminNAD
                    : "N/A"}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="protein" labelText="Protein">
                  {questionnaireResponseDetail.IntervenPathTestUrinalysisProteinLevel
                    ? questionnaireResponseDetail.IntervenPathTestUrinalysisProteinLevel
                    : "N/A"}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="blood" labelText="Blood">
                  {questionnaireResponseDetail.IntervenPathTestUrinalysisBloodLevel
                    ? questionnaireResponseDetail.IntervenPathTestUrinalysisBloodLevel
                    : "N/A"}
                </Display>
              </Grid.Item>
            </Grid.Column>

            <Grid.Column>
              <Grid.Item>
                <Display htmlFor="glucose" labelText="Glucose">
                  {questionnaireResponseDetail.IntervenPathTestUrinalysisGlucoseLevel
                    ? questionnaireResponseDetail.IntervenPathTestUrinalysisGlucoseLevel
                    : "N/A"}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="leu" labelText="Leu">
                  {questionnaireResponseDetail.IntervenPathTestUrinalysisWCNumbered
                    ? questionnaireResponseDetail.IntervenPathTestUrinalysisWCNumbered
                    : "N/A"}
                </Display>
              </Grid.Item>
            </Grid.Column>

            <Grid.Column>
              <Grid.Item>
                <Display htmlFor="nitrites" labelText="Nitrites">
                  {questionnaireResponseDetail.IntervenPathTestUrinalysisNitrites
                    ? questionnaireResponseDetail.IntervenPathTestUrinalysisNitrites
                    : "N/A"}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="ketone" labelText="Ketone">
                  {questionnaireResponseDetail.IntervenPathTestUrinalysisKetoneLevel
                    ? questionnaireResponseDetail.IntervenPathTestUrinalysisKetoneLevel
                    : "N/A"}
                </Display>
              </Grid.Item>
            </Grid.Column>
          </Grid>
        </Wrapper>
      </Container>
    </>
  );
}
