// Import: Packages
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addPopsAssessmentAdminNAD,
  addPopsAssessmentIntervenPathTestUrinalysisBloodLevel,
  addPopsAssessmentIntervenPathTestUrinalysisGlucoseLevel,
  addPopsAssessmentIntervenPathTestUrinalysisKetoneLevel,
  addPopsAssessmentIntervenPathTestUrinalysisNitrites,
  addPopsAssessmentIntervenPathTestUrinalysisProteinLevel,
  addPopsAssessmentIntervenPathTestUrinalysisWCNumbered,
} from "../../../../../redux/slices/triageSlice";

// Import: Elements
import { Container, Wrapper } from "./UrineObs.elements";

// Import: Components
import { Form, Grid, Text } from "../../../../components";

// SubPage: UrineObs
export default function UrineObs() {
  // Redux: useSelector, useDispatch
  const popsAssessment = useSelector((state) => {
    if (state.triage.popsAssessment) {
      return state.triage.popsAssessment;
    }
  });
  const dispatch = useDispatch();

  // Ref: Used for UrineObs form
  const bloodRef = useRef();
  const glucoseRef = useRef();
  const ketoneRef = useRef();
  const leuRef = useRef();
  const nadRef = useRef();
  const nitritesRef = useRef();
  const proteinRef = useRef();

  // Add values to Redux
  const addBloodToRedux = () => {
    dispatch(
      addPopsAssessmentIntervenPathTestUrinalysisBloodLevel(
        bloodRef.current.value
      )
    );
  };
  const addGlucoseToRedux = () => {
    dispatch(
      addPopsAssessmentIntervenPathTestUrinalysisGlucoseLevel(
        glucoseRef.current.value
      )
    );
  };
  const addKetoneToRedux = () => {
    dispatch(
      addPopsAssessmentIntervenPathTestUrinalysisKetoneLevel(
        ketoneRef.current.value
      )
    );
  };
  const addLeuToRedux = () => {
    dispatch(
      addPopsAssessmentIntervenPathTestUrinalysisWCNumbered(
        leuRef.current.value
      )
    );
  };
  const addNadToRedux = () => {
    dispatch(
      addPopsAssessmentAdminNAD(nadRef.current.checked === true ? "NAD" : null)
    );
  };
  const addNitritesToRedux = () => {
    dispatch(
      addPopsAssessmentIntervenPathTestUrinalysisNitrites(
        nitritesRef.current.value
      )
    );
  };
  const addProteinToRedux = () => {
    dispatch(
      addPopsAssessmentIntervenPathTestUrinalysisProteinLevel(
        proteinRef.current.value
      )
    );
  };

  return (
    <>
      <Container data-testid={"urineObs"}>
        <Wrapper>
          <Text as="h2" heading>
            Urine Obs
          </Text>

          <Form>
            <Grid>
              <Grid.Column>
                <Grid.Item>
                  <Form.Checkbox
                    checked={popsAssessment.AdminNAD}
                    htmlFor="nad"
                    left
                    name="nad"
                    onChange={addNadToRedux}
                    ref={nadRef}
                    text="NAD"
                    value={popsAssessment.AdminNAD}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="protein"
                    labelText="Protein"
                    onChange={addProteinToRedux}
                    options={["Negative", "Trace", "+", "++", "+++", "++++"]}
                    ref={proteinRef}
                    value={
                      popsAssessment.IntervenPathTestUrinalysisProteinLevel
                    }
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="blood"
                    labelText="Blood"
                    onChange={addBloodToRedux}
                    options={[
                      "Negative",
                      "Trace",
                      "+",
                      "++",
                      "+++",
                      "++++",
                      "Haemolysed trace",
                      "Non-haemolysed trace",
                      "Non-haemolysed moderate",
                    ]}
                    ref={bloodRef}
                    value={popsAssessment.IntervenPathTestUrinalysisBloodLevel}
                  />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="glucose"
                    labelText="Glucose"
                    onChange={addGlucoseToRedux}
                    options={["Negative", "Trace", "+", "++", "+++", "++++"]}
                    ref={glucoseRef}
                    value={
                      popsAssessment.IntervenPathTestUrinalysisGlucoseLevel
                    }
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="leu"
                    labelText="Leu"
                    onChange={addLeuToRedux}
                    options={["Negative", "Trace", "1+", "2+", "3+", "4+"]}
                    ref={leuRef}
                    value={popsAssessment.IntervenPathTestUrinalysisWCNumbered}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="nitrites"
                    labelText="Nitrites"
                    onChange={addNitritesToRedux}
                    options={["Negative", "Positive"]}
                    ref={nitritesRef}
                    value={popsAssessment.IntervenPathTestUrinalysisNitrites}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="ketone"
                    labelText="Ketone"
                    onChange={addKetoneToRedux}
                    options={["Negative", "Trace", "+", "++", "+++", "++++"]}
                    ref={ketoneRef}
                    value={popsAssessment.IntervenPathTestUrinalysisKetoneLevel}
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
