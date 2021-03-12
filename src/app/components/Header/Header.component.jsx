// Import: Packages
import React from "react";

// Import: Assets
// import { ReactComponent as LogoutIcon } from "../../../assets/img/icon/settings-logout.svg";
import { ReactComponent as UserSvg } from "../../../assets/img/icon/topbar-user.svg";

// Import: Elements
import {
  Container,
  Logo,
  LogoContainer,
  LogoLink,
  UserContainer,
  UserDetails,
  UserIcon,
  Wrapper,
} from "./Header.elements";

// Component: Header
export default function Header() {
  return (
    <>
      <Container data-testid={"header"}>
        <Wrapper>
          <LogoContainer>
            <LogoLink to="/one-ed/ward/dashboard">
              <Logo>
                <span>OneED</span>
              </Logo>
            </LogoLink>
          </LogoContainer>

          <UserContainer>
            <UserIcon>
              <UserSvg />
            </UserIcon>

            <UserDetails>
              <span>Jane Doe</span>
              <span>Clinician</span>
            </UserDetails>
          </UserContainer>
        </Wrapper>
      </Container>
    </>
  );
}
