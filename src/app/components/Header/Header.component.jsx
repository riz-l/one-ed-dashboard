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
            <Logo>
              <span>OneED</span>
            </Logo>
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
