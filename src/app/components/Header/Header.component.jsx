// Import: Packages
import React, { useState } from "react";
import { useSelector } from "react-redux";

// Import: Utils
import { capitalizeFirstLetter } from "../../../utils/capitalizeFirstLetter";

// Import: Assets
import { ReactComponent as LogoSvg } from "../../../assets/img/logo/logoBlue.svg";
import { ReactComponent as LogoWhiteSvg } from "../../../assets/img/logo/logoWhite.svg";
import { ReactComponent as MenuIcon } from "../../../assets/img/icon/menu.svg";
import { ReactComponent as UserSvg } from "../../../assets/img/icon/topbar-user.svg";

// Import: Elements
import {
  Container,
  ContentWrapper,
  Logo,
  LogoContainer,
  LogoLink,
  MenuContainer,
  ModalTopWrapper,
  StyledModal,
  UserContainer,
  UserDetails,
  UserIcon,
  Wrapper,
} from "./Header.elements";
import "./Header.styles.css";

// Import: Components
import { Button, Display, Grid, PageTitle, ReportSection } from "../index";

// Component: Header
export default function Header({ isNavigationOpen, setIsNavigationOpen }) {
  // Redux: useSelector
  const userDetails = useSelector((state) => {
    if (state.userDetails) {
      return state.userDetails;
    }
  });

  // Redux: useSelector
  const isGlobalThemeDark = useSelector((state) => {
    if (state.globalTheme.isGlobalThemeDark) {
      return state.globalTheme.isGlobalThemeDark;
    }
  });

  // State: Local state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // onClick: Functions for opening and closing the modal
  function openModal() {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  }
  function closeModal() {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  }

  return (
    <>
      <Container data-testid={"header"}>
        <Wrapper>
          <LogoContainer>
            <LogoLink to="/one-ed/ward/dashboard">
              <Logo>{isGlobalThemeDark ? <LogoWhiteSvg /> : <LogoSvg />}</Logo>
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
              <span>
                {userDetails && userDetails.details.ControlActEvent
                  ? userDetails.details.ControlActEvent.Subject.Value[0]
                      .UserRoleProfile[0].UserID.identifierName
                  : "N/A"}
              </span>

              <span style={{ textTransform: "capitalize" }}>
                {userDetails && userDetails.details.ControlActEvent
                  ? userDetails.details.ControlActEvent.Subject.Value[0]
                      .UserRoleProfile[0].UserRole.code
                  : "N/A"}
              </span>
            </UserDetails>
          </UserContainer>
        </Wrapper>

        <StyledModal
          ariaHideApp={false}
          className="Modal"
          closeTimeoutMS={100}
          contentLabel="User Information"
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          overlayClassName="Overlay"
        >
          <ContentWrapper>
            <ModalTopWrapper>
              <PageTitle
                backgroundColor="transparent"
                heading="User Information"
                padding="0 0 2rem 0"
                subheading="User details and role information"
              />

              <Button
                onClick={closeModal}
                margin="0 2rem 0.8rem 0"
                text="Close"
              />
            </ModalTopWrapper>

            <ReportSection
              content={
                <>
                  <Grid>
                    <Grid.Column>
                      <Display htmlFor="userExtension" labelText="Extension">
                        {userDetails && userDetails.details.ControlActEvent
                          ? userDetails.details.ControlActEvent.Subject.Value[0]
                              .UserRoleProfile[0].UserID.extension
                          : "N/A"}
                      </Display>

                      <Display
                        htmlFor="userOrganisation"
                        labelText="User Organisation"
                      >
                        {userDetails && userDetails.details.ControlActEvent
                          ? userDetails.details.ControlActEvent.Subject.Value[0]
                              .UserRoleProfile[0].UserOrg.code
                          : "N/A"}
                      </Display>
                    </Grid.Column>

                    <Grid.Column>
                      <Display
                        htmlFor="identifierName"
                        labelText="Identifier Name"
                      >
                        {userDetails && userDetails.details.ControlActEvent
                          ? userDetails.details.ControlActEvent.Subject.Value[0]
                              .UserRoleProfile[0].UserID.identifierName
                          : "N/A"}
                      </Display>

                      <Display htmlFor="userRole" labelText="User Role">
                        {userDetails && userDetails.details.ControlActEvent
                          ? capitalizeFirstLetter(
                              userDetails.details.ControlActEvent.Subject
                                .Value[0].UserRoleProfile[0].UserRole.code
                            )
                          : "N/A"}
                      </Display>
                    </Grid.Column>

                    <Grid.Column>
                      {userDetails &&
                      userDetails.details.ControlActEvent &&
                      userDetails.details.ControlActEvent.Subject.Value[0]
                        .UserRoleProfile[0].UserSpeciality ? (
                        userDetails.details.ControlActEvent.Subject.Value[0].UserRoleProfile[0].UserSpeciality.map(
                          (item) => (
                            <Display
                              htmlFor={`userSpeciality${item.id}`}
                              labelText={`User Speciality (${item.id})`}
                              key={item.id}
                            >
                              {item.code}
                            </Display>
                          )
                        )
                      ) : (
                        <Display
                          htmlFor="noUserSpecialities"
                          labelText="User Speciality"
                        >
                          This User has no specialities
                        </Display>
                      )}
                    </Grid.Column>
                  </Grid>
                </>
              }
            />
          </ContentWrapper>
        </StyledModal>
      </Container>
    </>
  );
}
