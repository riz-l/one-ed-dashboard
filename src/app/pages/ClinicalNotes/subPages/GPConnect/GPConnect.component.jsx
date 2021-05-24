// Import: Packages
import React from "react";

// Import: Elements
import { Container, Frame, Window, Wrapper } from "./GPConnect.elements";

// Import: Components
import { Text } from "../../../../components";

// SubPage: GPConnect
export default function GPConnect() {
  return (
    <>
      <Container data-testid={"gPConnect"}>
        <Wrapper>
          <Text as="h2" heading>
            GP Connect
          </Text>

          <Window>
            <Frame
              src={`https://covidgpportal.hiowccgpartnership.nhs.uk/index.php?option=com_docman&view=download&alias=122-gp-connect-covid-19-slides&category_slug=collaborative-working-including-data-sharing&Itemid=236`}
            />
          </Window>
        </Wrapper>
      </Container>
    </>
  );
}
