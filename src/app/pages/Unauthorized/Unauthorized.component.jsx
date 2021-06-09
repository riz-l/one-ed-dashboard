// Import: Packages
import React from "react";

// Import: Assets
import DedalusLogo from "../../../assets/img/logo/dedalusLogo.png";
import { ReactComponent as LogoSvg } from "../../../assets/img/logo/logoBlue.svg";

// Import: Elements
import {
  Logo,
  CompanyLogo,
  Container,
  ReturnButton,
  Wrapper,
} from "./Unauthorized.elements";

// Import: Components
import { Text } from "../../components";

// Page: Unauthorized
export default function Unauthorized() {
  return (
    <>
      <Container data-testid={"unauthorized"}>
        <Wrapper>
          <Logo>
            <LogoSvg />
          </Logo>
          <h1>403: Unauthorised</h1>
          <Text as="p" text>
            Please login before attempting to access this page.
          </Text>

          <ReturnButton to="/">Return to Home</ReturnButton>
        </Wrapper>
        <CompanyLogo>
          <img src={DedalusLogo} alt="Dedalus Logo" />
          <div>
            <p style={{ paddingRight: "6px" }}>&copy; 2021</p>
            <p>Dedalus Group</p>
          </div>
        </CompanyLogo>
      </Container>
    </>
  );
}
