// Import: Packages
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Import: Assets
import { ReactComponent as LogoSvg } from "../../../assets/img/logo/logoBlue.svg";
import { ReactComponent as LogoWhiteSvg } from "../../../assets/img/logo/logoWhite.svg";
import DedalusLogo from "../../../assets/img/logo/dedalusLogo.png";

// Import: Elements
import { Container, CompanyLogo, Logo, Wrapper } from "./Home.elements";

// Page: Home
export default function Home() {
  // Redux: useSelector
  const isGlobalThemeDark = useSelector((state) => {
    if (state.globalTheme.isGlobalThemeDark) {
      return state.globalTheme.isGlobalThemeDark;
    }
  });

  return (
    <>
      <Container data-testid={"home"}>
        <Wrapper>
          <Logo>{isGlobalThemeDark ? <LogoWhiteSvg /> : <LogoSvg />}</Logo>

          <div>
            <Link to="/login">Login</Link>
          </div>
        </Wrapper>

        <CompanyLogo>
          <img alt="Dedalus Logo" id="dedalusLogo" src={DedalusLogo} />

          <div>
            <p style={{ paddingRight: "6px" }}>&copy; 2021</p>
            <p>Dedalus Group</p>
          </div>
        </CompanyLogo>
      </Container>
    </>
  );
}
