// Import: Packages
import React from "react";
import { Link } from "react-router-dom";

// Import: Assets
import { ReactComponent as LogoSvg } from "../../../assets/img/logo/logoBlue.svg";
import dedalusLogo from "../../../assets/img/logo/Dedalus Logo.png";

// Import: Elements
import { Container, CompanyLogo, Logo, Wrapper } from "./Home.elements";

// Page: Home
export default function Home() {
  return (
    <>
      <Container data-testid={"home"}>
        <Wrapper>
          <Logo>
            <LogoSvg />
          </Logo>
          <div>
            <Link to="/login">Login</Link>
          </div>
        </Wrapper>

        <CompanyLogo>
          <img id="dedalusLogo" src={dedalusLogo} alt="Dedalus Logo" />
          <div>
            <p style={{ paddingRight: "0.2em" }}>&copy; 2021 </p>
            <p>Dedalus Group</p>
          </div>
        </CompanyLogo>
      </Container>
    </>
  );
}
