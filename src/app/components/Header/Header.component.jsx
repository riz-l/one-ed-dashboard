// Import: Packages
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReactModal from "react-modal";

// Import: Assets
import { ReactComponent as LogoSvg } from "../../../assets/img/logo/logoBlue.svg";
import { ReactComponent as MenuIcon } from "../../../assets/img/icon/menu.svg";
import { ReactComponent as UserSvg } from "../../../assets/img/icon/topbar-user.svg";

// Import: Elements
import {
  Container,
  FormWrapper,
  Heading,
  HeadingImage,
  HeadingContent,
  Logo,
  LogoContainer,
  LogoLink,
  MenuContainer,
  ModalTopWrapper,
  ModalButtonWrapper,
  UserContainer,
  UserDetails,
  UserIcon,
  Wrapper,
} from "./Header.elements";
import "./Header.styles.css";

// Import: Components
import { Button, Display, Grid, Text } from "../index";

// Component: Header
export default function Header({ isNavigationOpen, setIsNavigationOpen }) {
  // Redux: Fetches user details from the global state
  const userRoleProfile = useSelector(
    (state) =>
      state.userDetails.details.ControlActEvent.Subject.Value[0]
        .UserRoleProfile[0]
  );

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
                <LogoSvg />
                {/* <span>OneED</span> */}
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
              <span>{userRoleProfile.UserID.identifierName}</span>
              <span style={{ textTransform: "capitalize" }}>
                {userRoleProfile.UserRole.code}
              </span>
            </UserDetails>
          </UserContainer>
        </Wrapper>

        {/* User Information Modal contents */}
        <ReactModal
          isOpen={isModalOpen}
          contentLabel="User Information"
          onRequestClose={closeModal}
          className="Modal"
          overlayClassName="Overlay"
          closeTimeoutMS={100}
          ariaHideApp={false}
        >
          <FormWrapper>
            <ModalTopWrapper>
              <Text heading as="h3">
                User Information
              </Text>

              <ModalButtonWrapper>
                <Button text="Close" onClick={closeModal} />
              </ModalButtonWrapper>
            </ModalTopWrapper>

            <Heading>
              <HeadingImage>
                <UserSvg />
              </HeadingImage>

              <HeadingContent>
                <h2>User Information</h2>

                <Grid>
                  <Grid.Column>
                    {/* TODO will need to be converted into something more useful. */}
                    <Display htmlFor="extension" labelText="Extension">
                      {userRoleProfile.UserID.extension}
                    </Display>

                    <Display htmlFor="name" labelText="Name">
                      {userRoleProfile.UserID.identifierName}
                    </Display>
                  </Grid.Column>

                  <Grid.Column>
                    <Display
                      htmlFor="userRole"
                      labelText="User Role"
                      style={{ textTransform: "capitalize" }}
                    >
                      {userRoleProfile.UserRole.code}
                    </Display>

                    <Display htmlFor="userOrg" labelText="User Organisation">
                      {userRoleProfile.UserOrg.code}
                    </Display>
                  </Grid.Column>
                </Grid>
              </HeadingContent>
            </Heading>
          </FormWrapper>
        </ReactModal>
      </Container>
    </>
  );
}
