// Import: Packages
import React from "react";

// Import: Assets
import { ReactComponent as MenuIcon } from "../../../assets/img/icon/menu.svg";
import { ReactComponent as UserSvg } from "../../../assets/img/icon/topbar-user.svg";

// Import: Elements
import {
  Container,
  Logo,
  LogoContainer,
  LogoLink,
  MenuContainer,
  UserContainer,
  UserDetails,
  UserIcon,
  Wrapper,
} from "./Header.elements";

// Component: Header
export default function Header({ isNavigationOpen, setIsNavigationOpen }) {
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

            <MenuContainer
              onClick={() =>
                setIsNavigationOpen((isNavigationOpen) => !isNavigationOpen)
              }
            >
              <MenuIcon />
            </MenuContainer>
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
