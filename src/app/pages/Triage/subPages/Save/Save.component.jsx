// Import: Packages
import React from "react";
import { useDispatch } from "react-redux";
import { postPopsAssessment } from "../../../../../redux/slices/triageSlice";

// Import: Elements
import { Container, Wrapper } from "./Save.elements";

// Import: Components
import { Button, Text } from "../../../../components";

// SubPage: Save
export default function Save() {
  // Redux:
  const dispatch = useDispatch();

  // Submit POPS Assessment to API
  const submitPopsAssessmentForm = async (event) => {
    event.preventDefault();

    try {
      dispatch(postPopsAssessment());
      console.log("POPS ASSESSMENT SENT");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Container data-testid={"save"}>
        <Wrapper>
          <Text as="h2" heading>
            Save
          </Text>

          <Button
            type="submit"
            text="Submit POPS Assessment"
            onClick={submitPopsAssessmentForm}
          />

          {/* TODO: Save and return to dashboard */}
          {/* TODO: Save and continue */}
        </Wrapper>
      </Container>
    </>
  );
}
