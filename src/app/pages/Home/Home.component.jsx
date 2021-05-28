// Import: Packages
import React from "react";
import { Link } from "react-router-dom";

// Import: Assets
import { ReactComponent as LogoSvg } from "../../../assets/img/logo/logoBlue.svg";
import DedalusLogo from "../../../assets/img/logo/dedalusLogo.png";

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
          <img id="dedalusLogo" src={DedalusLogo} alt="Dedalus Logo" />
          <div>
            <p style={{ paddingRight: "0.2em" }}>&copy; 2021 </p>
            <p>Dedalus Group</p>
          </div>
        </CompanyLogo>
      </Container>
    </>
  );
}
