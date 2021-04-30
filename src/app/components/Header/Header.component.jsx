// Import: Packages
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReactModal from "react-modal";

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
import "./Header.styles.css";

// Import: Components
import { Button, Text } from "../index";

// Component: Header
export default function Header({ isNavigationOpen, setIsNavigationOpen }) {
  // State: isModalOpen
  const [isModalOpen, setIsModalOpen] = useState(false);

  // onClick: Opens Modal
  function openModal() {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  }

  // onClick: Closes Modal
  function closeModal() {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  }

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

          <UserContainer onClick={openModal}>
            <UserIcon>
              <UserSvg />
            </UserIcon>

            <UserDetails>
              <span>Jane Doe</span>
              <span>Clinician</span>
            </UserDetails>
          </UserContainer>
        </Wrapper>

        <ReactModal
          isOpen={isModalOpen}
          contentLabel="User Information"
          onRequestClose={closeModal}
          className="Modal"
          overlayClassName="Overlay"
          closeTimeoutMS={100}
          ariaHideApp={false}
        >
          <Text heading as="h3">
            User Information
          </Text>

          <Button text="Close" onClick={closeModal} />
        </ReactModal>
      </Container>
    </>
  );
}
