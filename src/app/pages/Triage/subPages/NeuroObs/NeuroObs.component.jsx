// Import: Packages
import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addPopsAssessmentSysObsNeuroEDObsGCSEyes,
  addPopsAssessmentSysObsNeuroEDObsGCSVerbal,
  addPopsAssessmentSysObsNeuroEDObsGCSMotor,
  addPopsAssessmentSysObsNeuroEDObsGCSTotal,
  addPopsAssessmentSysObsNeuroPupilsEqual,
  addPopsAssessmentSysObsNeuroPupilSizeLeft,
  addPopsAssessmentSysObsNeuroPupilSizeRight,
  addPopsAssessmentSysObsNeuroPupilReactivityLeft,
  addPopsAssessmentSysObsNeuroPupilReactivityRight,
  addPopsAssessmentRegObsArmLimbMovementLeft,
  addPopsAssessmentRegObsArmLimbMovementRight,
  addPopsAssessmentRegObsLegLimbMovementLeft,
  addPopsAssessmentRegObsLegLimbMovementRight,
} from "../../../../../redux/slices/triageSlice";

// Import: Elements
import { Container, Wrapper } from "./NeuroObs.elements";

// Import: Components
import { Form, Grid, Text } from "../../../../components";

// SubPage: NeuroObs
export default function NeuroObs() {
  // Redux:
  const popsAssessment = useSelector((state) => state.triage.popsAssessment);
  const dispatch = useDispatch();

  // Effect:
  useEffect(() => {
    // dispatch(addPopsAssessmentSysObsNeuroEDObsGCSEyes());
    // dispatch(addPopsAssessmentSysObsNeuroEDObsGCSVerbal());
    // dispatch(addPopsAssessmentSysObsNeuroEDObsGCSMotor());
    // dispatch(addPopsAssessmentSysObsNeuroEDObsGCSTotal());
    dispatch(addPopsAssessmentSysObsNeuroPupilsEqual());
    dispatch(addPopsAssessmentSysObsNeuroPupilSizeLeft());
    dispatch(addPopsAssessmentSysObsNeuroPupilReactivityLeft());
    dispatch(addPopsAssessmentSysObsNeuroPupilSizeRight());
    dispatch(addPopsAssessmentSysObsNeuroPupilReactivityRight());
    dispatch(addPopsAssessmentRegObsArmLimbMovementLeft());
    dispatch(addPopsAssessmentRegObsLegLimbMovementLeft());
    dispatch(addPopsAssessmentRegObsArmLimbMovementRight());
    dispatch(addPopsAssessmentRegObsLegLimbMovementRight());
  }, []);

  // Ref:
  const eyesRef = useRef();
  const verbalRef = useRef();
  const motorRef = useRef();
  const gcsTotalRef = useRef();
  const equalOrUnequalRef = useRef();
  const leftPupilSizeRef = useRef();
  const leftPupilReactionRef = useRef();
  const rightPupilSizeRef = useRef();
  const rightPupilReactionRef = useRef();
  const leftArmRef = useRef();
  const leftLegRef = useRef();
  const rightArmRef = useRef();
  const rightLegRef = useRef();

  // Add values to Redux
  const addEyesToRedux = () => {
    dispatch(addPopsAssessmentSysObsNeuroEDObsGCSEyes(eyesRef.current.value));
  };
  const addVerbalToRedux = () => {
    dispatch(
      addPopsAssessmentSysObsNeuroEDObsGCSVerbal(verbalRef.current.value)
    );
  };
  const addMotorToRedux = () => {
    dispatch(addPopsAssessmentSysObsNeuroEDObsGCSMotor(motorRef.current.value));
  };
  const addGcsTotalToRedux = () => {
    dispatch(
      addPopsAssessmentSysObsNeuroEDObsGCSTotal(gcsTotalRef.current.value)
    );
  };

  return (
    <>
      <Container data-testid={"neuroObs"}>
        <Wrapper>
          <Text as="h2" heading>
            Neuro Obs
          </Text>

          <Form>
            <Grid>
              <Grid.Column>
                <Grid.Item>
                  <Form.Text as="h3" subheading>
                    GCS
                  </Form.Text>
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="eyes"
                    labelText="Eyes"
                    onChange={addEyesToRedux}
                    options={["Spontaneously"]}
                    ref={eyesRef}
                    value={popsAssessment.SysObsNeuroEDObsGCSEyes}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="verbal"
                    labelText="Verbal"
                    onChange={addVerbalToRedux}
                    options={["Orientated"]}
                    ref={verbalRef}
                    value={popsAssessment.SysObsNeuroEDObsGCSVerbal}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="motor"
                    labelText="Motor"
                    onChange={addMotorToRedux}
                    options={["Obeys commands"]}
                    ref={motorRef}
                    value={popsAssessment.SysObsNeuroEDObsGCSMotor}
                  />
                </Grid.Item>

                {/* GCS Total needs to be a calculated value adding up the scored for Eyes, Verbal and Motor. */}

                <Grid.Item>
                  <Form.Input
                    htmlFor="gcsTotal"
                    labelText="GCS Total"
                    onChange={addGcsTotalToRedux}
                    placeholder="Type a number..."
                    ref={gcsTotalRef}
                    type="number"
                    value={popsAssessment.SysObsNeuroEDObsGCSTotal}
                  />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Text as="h3" subheading>
                    Pupils
                  </Form.Text>
                </Grid.Item>

                <Grid.Item>
                  <Form.Radio htmlFor="equal" name="pupils" text="Equal" />
                  <Form.Radio htmlFor="unequal" name="pupils" text="Unequal" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="leftPupilSize"
                    labelText="Left Pupil Size"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="leftPupilReaction"
                    labelText="Left Pupil Reaction"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="rightPupilSize"
                    labelText="Right Pupil Size"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="rightPupilReaction"
                    labelText="Right Pupil Reaction"
                  />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Text as="h3" subheading>
                    Limb Movement
                  </Form.Text>
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown htmlFor="leftArm" labelText="Left Arm" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown htmlFor="leftLeg" labelText="Left Leg" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown htmlFor="rightArm" labelText="Right Arm" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown htmlFor="rightLeg" labelText="Right Leg" />
                </Grid.Item>
              </Grid.Column>
            </Grid>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
}
