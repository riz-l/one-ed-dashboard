// Import: Packages
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addPopsAssessmentRegObsArmLimbMovementLeft,
  addPopsAssessmentRegObsArmLimbMovementRight,
  addPopsAssessmentRegObsLegLimbMovementLeft,
  addPopsAssessmentRegObsLegLimbMovementRight,
  addPopsAssessmentSysObsNeuroEDObsGCSEyes,
  addPopsAssessmentSysObsNeuroEDObsGCSMotor,
  addPopsAssessmentSysObsNeuroEDObsGCSVerbal,
  addPopsAssessmentSysObsNeuroEDObsGCSTotal,
  addPopsAssessmentSysObsNeuroPupilsEqual,
  addPopsAssessmentSysObsNeuroPupilReactivityLeft,
  addPopsAssessmentSysObsNeuroPupilReactivityRight,
  addPopsAssessmentSysObsNeuroPupilSizeLeft,
  addPopsAssessmentSysObsNeuroPupilSizeRight,
} from "../../../../../redux/slices/triageSlice";

// Import: Elements
import { Container, Wrapper } from "./NeuroObs.elements";

// Import: Components
import { Form, Grid, Text } from "../../../../components";

// SubPage: NeuroObs
export default function NeuroObs() {
  // Redux: useSelector, useDispatch
  const popsAssessment = useSelector((state) => {
    if (state.triage.popsAssessment) {
      return state.triage.popsAssessment;
    }
  });
  const dispatch = useDispatch();

  // Ref: Used for NeuroObs form
  const equalOrUnequalRef = useRef();
  const eyesRef = useRef();
  const gcsTotalRef = useRef();
  const leftArmRef = useRef();
  const leftLegRef = useRef();
  const leftPupilReactionRef = useRef();
  const leftPupilSizeRef = useRef();
  const motorRef = useRef();
  const rightArmRef = useRef();
  const rightLegRef = useRef();
  const rightPupilReactionRef = useRef();
  const rightPupilSizeRef = useRef();
  const verbalRef = useRef();

  // Add values to Redux
  const addEyesToRedux = () => {
    dispatch(addPopsAssessmentSysObsNeuroEDObsGCSEyes(eyesRef.current.value));
  };
  const addGcsTotalToRedux = () => {
    dispatch(
      addPopsAssessmentSysObsNeuroEDObsGCSTotal(gcsTotalRef.current.value)
    );
  };
  const addLeftArmToRedux = () => {
    dispatch(
      addPopsAssessmentRegObsArmLimbMovementLeft(leftArmRef.current.value)
    );
  };
  const addLeftLegToRedux = () => {
    dispatch(
      addPopsAssessmentRegObsLegLimbMovementLeft(leftLegRef.current.value)
    );
  };
  const addLeftPupilReactionToRedux = () => {
    dispatch(
      addPopsAssessmentSysObsNeuroPupilReactivityLeft(
        leftPupilReactionRef.current.value
      )
    );
  };
  const addLeftPupilSizeToRedux = () => {
    dispatch(
      addPopsAssessmentSysObsNeuroPupilSizeLeft(leftPupilSizeRef.current.value)
    );
  };
  const addMotorToRedux = () => {
    dispatch(addPopsAssessmentSysObsNeuroEDObsGCSMotor(motorRef.current.value));
  };
  const addRightArmToRedux = () => {
    dispatch(
      addPopsAssessmentRegObsArmLimbMovementRight(rightArmRef.current.value)
    );
  };
  const addRightLegToRedux = () => {
    dispatch(
      addPopsAssessmentRegObsLegLimbMovementRight(rightLegRef.current.value)
    );
  };
  const addRightPupilReactionToRedux = () => {
    dispatch(
      addPopsAssessmentSysObsNeuroPupilReactivityRight(
        rightPupilReactionRef.current.value
      )
    );
  };
  const addRightPupilSizeToRedux = () => {
    dispatch(
      addPopsAssessmentSysObsNeuroPupilSizeRight(
        rightPupilSizeRef.current.value
      )
    );
  };
  const addVerbalToRedux = () => {
    dispatch(
      addPopsAssessmentSysObsNeuroEDObsGCSVerbal(verbalRef.current.value)
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
                    options={[
                      "Spontaneously",
                      "To Speech",
                      "To Stimulus",
                      "None",
                    ]}
                    ref={eyesRef}
                    value={popsAssessment.SysObsNeuroEDObsGCSEyes}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="verbal"
                    labelText="Verbal"
                    onChange={addVerbalToRedux}
                    options={[
                      "Orientated",
                      "Confused",
                      "Inappropriate Words",
                      "None",
                      "Incomprehensible Sounds",
                    ]}
                    ref={verbalRef}
                    value={popsAssessment.SysObsNeuroEDObsGCSVerbal}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="motor"
                    labelText="Motor"
                    onChange={addMotorToRedux}
                    options={[
                      "Obeys commands",
                      "Localises stimulus",
                      "Flexion Withdrawal",
                      "Flexion abnormal",
                      "No response",
                      "Extension",
                    ]}
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
                    onChange={addLeftPupilSizeToRedux}
                    options={["0", "1", "2", "3", "4", "5", "6", "7", "8"]}
                    ref={leftPupilSizeRef}
                    value={popsAssessment.SysObsNeuroPupilSizeLeft}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="leftPupilReaction"
                    labelText="Left Pupil Reaction"
                    onChange={addLeftPupilReactionToRedux}
                    options={[
                      "Reactive",
                      "Sluggish",
                      "Non-Reactive",
                      "Fixed and Dilated",
                      "Closed",
                    ]}
                    ref={leftPupilReactionRef}
                    value={popsAssessment.SysObsNeuroPupilReactivityLeft}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="rightPupilSize"
                    labelText="Right Pupil Size"
                    onChange={addRightPupilSizeToRedux}
                    options={["0", "1", "2", "3", "4", "5", "6", "7", "8"]}
                    ref={rightPupilSizeRef}
                    value={popsAssessment.SysObsNeuroPupilSizeRight}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="rightPupilReaction"
                    labelText="Right Pupil Reaction"
                    onChange={addRightPupilReactionToRedux}
                    options={[
                      "Reactive",
                      "Sluggish",
                      "Non-Reactive",
                      "Fixed and Dilated",
                      "Closed",
                    ]}
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
                    onChange={addLeftArmToRedux}
                    options={[
                      "Normal Power",
                      "Mild Weakness",
                      "Severe Weakness",
                      "Spastic Flexion",
                      "Extension",
                      "No Response",
                    ]}
                    ref={leftArmRef}
                    value={popsAssessment.RegObsArmLimbMovementLeft}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="leftLeg"
                    labelText="Left Leg"
                    onChange={addLeftLegToRedux}
                    options={[
                      "Normal Power",
                      "Mild Weakness",
                      "Severe Weakness",
                      "Spastic Flexion",
                      "Extension",
                      "No Response",
                    ]}
                    ref={leftLegRef}
                    value={popsAssessment.RegObsLegLimbMovementLeft}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="rightArm"
                    labelText="Right Arm"
                    onChange={addRightArmToRedux}
                    options={[
                      "Normal Power",
                      "Mild Weakness",
                      "Severe Weakness",
                      "Spastic Flexion",
                      "Extension",
                      "No Response",
                    ]}
                    ref={rightArmRef}
                    value={popsAssessment.RegObsArmLimbMovementRight}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="rightLeg"
                    labelText="Right Leg"
                    onChange={addRightLegToRedux}
                    options={[
                      "Normal Power",
                      "Mild Weakness",
                      "Severe Weakness",
                      "Spastic Flexion",
                      "Extension",
                      "No Response",
                    ]}
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
