// Import: Packages
import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addPopsAssessmentAdminNAD,
  addPopsAssessmentIntervenPathTestUrinalysisProteinLevel,
  addPopsAssessmentIntervenPathTestUrinalysisBloodLevel,
  addPopsAssessmentIntervenPathTestUrinalysisGlucoseLevel,
  addPopsAssessmentIntervenPathTestUrinalysisWCNumbered,
  addPopsAssessmentIntervenPathTestUrinalysisNitrites,
  addPopsAssessmentIntervenPathTestUrinalysisKetoneLevel,
} from "../../../../../redux/slices/triageSlice";

// Import: Elements
import { Container, Wrapper } from "./UrineObs.elements";

// Import: Components
import { Form, Grid, Text } from "../../../../components";

// SubPage: UrineObs
export default function UrineObs() {
  // Redux:
  const popsAssessment = useSelector((state) => state.triage.popsAssessment);
  const dispatch = useDispatch();

  // Ref:
  const nadRef = useRef();
  const proteinRef = useRef();
  const bloodRef = useRef();
  const glucoseRef = useRef();
  const leuRef = useRef();
  const nitritesRef = useRef();
  const ketoneRef = useRef();

  // Add values to Redux
  const addNadToRedux = () => {
    dispatch(
      addPopsAssessmentAdminNAD(nadRef.current.checked === true ? "NAD" : null)
    );
  };
  const addProteinToRedux = () => {
    dispatch(
      addPopsAssessmentIntervenPathTestUrinalysisProteinLevel(
        proteinRef.current.value
      )
    );
  };
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
  const addLeuToRedux = () => {
    dispatch(
      addPopsAssessmentIntervenPathTestUrinalysisWCNumbered(
        leuRef.current.value
      )
    );
  };
  const addNitritesToRedux = () => {
    dispatch(
      addPopsAssessmentIntervenPathTestUrinalysisNitrites(
        nitritesRef.current.value
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
                    options={["Negative"]}
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
                    options={["Negative"]}
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
                    options={["Negative"]}
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
                    options={["Negative"]}
                    ref={leuRef}
                    value={popsAssessment.IntervenPathTestUrinalysisWCNumbered}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="nitrites"
                    labelText="Nitrites"
                    onChange={addNitritesToRedux}
                    options={["Negative"]}
                    ref={nitritesRef}
                    value={popsAssessment.IntervenPathTestUrinalysisNitrites}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="ketone"
                    labelText="Ketone"
                    onChange={addKetoneToRedux}
                    options={["Negative"]}
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
