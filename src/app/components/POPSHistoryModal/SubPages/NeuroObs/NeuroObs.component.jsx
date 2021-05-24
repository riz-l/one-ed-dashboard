// Import: Packages
import React from "react";
import { useSelector } from "react-redux";

// Import: Elements
import { Container, Wrapper } from "./NeuroObs.elements";

// Import: Components
import { Display, Grid, Text } from "../../..";

// SubPage: NeuroObs
export default function NeuroObs() {
  // Redux:
  const questionnaireResponseDetail = useSelector(
    (state) => state.clinicalNotes.notes.questionnaireResponseDetail
  );

  return (
    <>
      <Container data-testid={"neuroObs"}>
        <Wrapper>
          <Text as="h2" heading>
            Neuro Obs
          </Text>

          <Grid>
            <Grid.Column>
              <Grid.Item>
                <Text as="h3" subheading>
                  GCS
                </Text>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="eyes" labelText="Eyes">
                  {questionnaireResponseDetail.SysObsNeuroEDObsGCSEyes
                    ? questionnaireResponseDetail.SysObsNeuroEDObsGCSEyes
                    : "N/A"}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="verbal" labelText="Verbal">
                  {questionnaireResponseDetail.SysObsNeuroEDObsGCSEyes
                    ? questionnaireResponseDetail.SysObsNeuroEDObsGCSEyes
                    : "N/A"}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="motor" labelText="Motor">
                  {questionnaireResponseDetail.SysObsNeuroEDObsGCSMotor
                    ? questionnaireResponseDetail.SysObsNeuroEDObsGCSMotor
                    : "N/A"}
                </Display>
              </Grid.Item>

              {/* GCS Total needs to be a calculated value adding up the scored for Eyes, Verbal and Motor. */}

              <Grid.Item>
                <Display htmlFor="gcsTotal" labelText="GCS Total">
                  {questionnaireResponseDetail.SysObsNeuroEDObsGCSTotal
                    ? questionnaireResponseDetail.SysObsNeuroEDObsGCSTotal
                    : "N/A"}
                </Display>
              </Grid.Item>
            </Grid.Column>

            <Grid.Column>
              <Grid.Item>
                <Text as="h3" subheading>
                  Pupils
                </Text>
              </Grid.Item>

              {/* Replace radio buttons with a Display component as answer will either be equal or unequal.  */}
              <Grid.Item>
                <Display
                  htmlFor="equalOrUnequal"
                  name="equalOrUnequal"
                  text="Equal or Unequal"
                >
                  {questionnaireResponseDetail.SysObsNeuroPupilsEqual
                    ? questionnaireResponseDetail.SysObsNeuroPupilsEqual
                    : "N/A"}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="leftPupilSize" labelText="Left Pupil Size">
                  {questionnaireResponseDetail.SysObsNeuroPupilSizeLeft
                    ? questionnaireResponseDetail.SysObsNeuroPupilSizeLeft
                    : "N/A"}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display
                  htmlFor="leftPupilReaction"
                  labelText="Left Pupil Reaction"
                >
                  {questionnaireResponseDetail.SysObsNeuroPupilReactivityLeft
                    ? questionnaireResponseDetail.SysObsNeuroPupilReactivityLeft
                    : "N/A"}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="rightPupilSize" labelText="Right Pupil Size">
                  {questionnaireResponseDetail.SysObsNeuroPupilSizeRight
                    ? questionnaireResponseDetail.SysObsNeuroPupilSizeRight
                    : "N/A"}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display
                  htmlFor="rightPupilReaction"
                  labelText="Right Pupil Reaction"
                >
                  {questionnaireResponseDetail.SysObsNeuroPupilReactivityRight
                    ? questionnaireResponseDetail.SysObsNeuroPupilReactivityRight
                    : "N/A"}
                </Display>
              </Grid.Item>
            </Grid.Column>

            <Grid.Column>
              <Grid.Item>
                <Text as="h3" subheading>
                  Limb Movement
                </Text>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="leftArm" labelText="Left Arm">
                  {questionnaireResponseDetail.RegObsArmLimbMovementLeft
                    ? questionnaireResponseDetail.RegObsArmLimbMovementLeft
                    : "N/A"}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="leftLeg" labelText="Left Leg">
                  {questionnaireResponseDetail.RegObsLegLimbMovementLeft
                    ? questionnaireResponseDetail.RegObsLegLimbMovementLeft
                    : "N/A"}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="rightArm" labelText="Right Arm">
                  {questionnaireResponseDetail.RegObsArmLimbMovementRight
                    ? questionnaireResponseDetail.RegObsArmLimbMovementRight
                    : "N/A"}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="rightLeg" labelText="Right Leg">
                  {questionnaireResponseDetail.RegObsLegLimbMovementRight
                    ? questionnaireResponseDetail.RegObsLegLimbMovementRight
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
