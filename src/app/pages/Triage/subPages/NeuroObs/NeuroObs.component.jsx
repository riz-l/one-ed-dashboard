// Import: Packages
import React, { useRef } from "react";
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
  const leftPupilSizeToRedux = () => {
    dispatch(
      addPopsAssessmentSysObsNeuroPupilSizeLeft(leftPupilSizeRef.current.value)
    );
  };
  const leftPupilReactionToRedux = () => {
    dispatch(
      addPopsAssessmentSysObsNeuroPupilReactivityLeft(
        leftPupilReactionRef.current.value
      )
    );
  };
  const rightPupilSizeToRedux = () => {
    dispatch(
      addPopsAssessmentSysObsNeuroPupilSizeRight(
        rightPupilSizeRef.current.value
      )
    );
  };
  const rightPupilReactionToRedux = () => {
    dispatch(
      addPopsAssessmentSysObsNeuroPupilReactivityRight(
        rightPupilReactionRef.current.value
      )
    );
  };
  const leftArmToRedux = () => {
    dispatch(
      addPopsAssessmentRegObsArmLimbMovementLeft(leftArmRef.current.value)
    );
  };
  const leftLegToRedux = () => {
    dispatch(
      addPopsAssessmentRegObsLegLimbMovementLeft(leftLegRef.current.value)
    );
  };
  const rightArmToRedux = () => {
    dispatch(
      addPopsAssessmentRegObsArmLimbMovementRight(rightArmRef.current.value)
    );
  };
  const rightLegToRedux = () => {
    dispatch(
      addPopsAssessmentRegObsLegLimbMovementRight(rightLegRef.current.value)
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
                  <Form.Display labelText="Pupils Equal or Unequal" />
                  <Grid.Item horizontal>
                    <Form.Radio
                      checked={
                        popsAssessment.SysObsNeuroPupilsEqual === "Equal"
                      }
                      htmlFor="equal"
                      margin="0 1rem 0.8rem 0"
                      name="pupils"
                      onChange={() =>
                        dispatch(
                          addPopsAssessmentSysObsNeuroPupilsEqual("Equal")
                        )
                      }
                      ref={equalOrUnequalRef}
                      text="Equal"
                      value="Equal"
                    />
                    <Form.Radio
                      checked={
                        popsAssessment.SysObsNeuroPupilsEqual === "Unequal"
                      }
                      htmlFor="unequal"
                      name="pupils"
                      onChange={() =>
                        dispatch(
                          addPopsAssessmentSysObsNeuroPupilsEqual("Unequal")
                        )
                      }
                      ref={equalOrUnequalRef}
                      text="Unequal"
                      value="Unequal"
                    />
                  </Grid.Item>
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="leftPupilSize"
                    labelText="Left Pupil Size"
                    onChange={leftPupilSizeToRedux}
                    options={["1", "2", "3", "4", "5", "6"]}
                    ref={leftPupilSizeRef}
                    value={popsAssessment.SysObsNeuroPupilSizeLeft}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="leftPupilReaction"
                    labelText="Left Pupil Reaction"
                    onChange={leftPupilReactionToRedux}
                    options={["Fixed and Dilated"]}
                    ref={leftPupilReactionRef}
                    value={popsAssessment.SysObsNeuroPupilReactivityLeft}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="rightPupilSize"
                    labelText="Right Pupil Size"
                    onChange={rightPupilSizeToRedux}
                    options={["1", "2", "3", "4", "5", "6"]}
                    ref={rightPupilSizeRef}
                    value={popsAssessment.SysObsNeuroPupilSizeRight}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="rightPupilReaction"
                    labelText="Right Pupil Reaction"
                    onChange={rightPupilReactionToRedux}
                    options={["Fixed and Dilated"]}
                    ref={rightPupilReactionRef}
                    value={popsAssessment.SysObsNeuroPupilReactivityRight}
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
                  <Form.Dropdown
                    htmlFor="leftArm"
                    labelText="Left Arm"
                    onChange={leftArmToRedux}
                    options={["Severe Weakness", "Spastic Flexion"]}
                    ref={leftArmRef}
                    value={popsAssessment.RegObsArmLimbMovementLeft}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="leftLeg"
                    labelText="Left Leg"
                    onChange={leftLegToRedux}
                    options={["Normal Power"]}
                    ref={leftLegRef}
                    value={popsAssessment.RegObsLegLimbMovementLeft}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="rightArm"
                    labelText="Right Arm"
                    onChange={rightArmToRedux}
                    options={["Severe Weakness", "Spastic Flexion"]}
                    ref={rightArmRef}
                    value={popsAssessment.RegObsArmLimbMovementRight}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="rightLeg"
                    labelText="Right Leg"
                    onChange={rightLegToRedux}
                    options={["Normal Power"]}
                    ref={rightLegRef}
                    value={popsAssessment.RegObsLegLimbMovementRight}
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
