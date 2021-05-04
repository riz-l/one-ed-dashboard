// Import: Packages
import React, { useState, useEffect } from "react";

// Import: Assets
import { ReactComponent as AdmitOrReferralIcon } from "../../../assets/img/icon/admitOrReferralIcon.svg";
import { ReactComponent as AssessmentsClinicalIcon } from "../../../assets/img/icon/assessments-clinical.svg";
import { ReactComponent as AssessmentsObservationsIcon } from "../../../assets/img/icon/assessments-observations.svg";
import { ReactComponent as AssessmentsSeenIcon } from "../../../assets/img/icon/assessments-seen.svg";
import { ReactComponent as AssessmentsTriageIcon } from "../../../assets/img/icon/assessments-triage.svg";
import { ReactComponent as AssessmentsViewIcon } from "../../../assets/img/icon/assessments-view.svg";
import { ReactComponent as PatientOverviewIcon } from "../../../assets/img/icon/patient-overview.svg";
import { ReactComponent as PatientCasIcon } from "../../../assets/img/icon/patient-cas.svg";
import { ReactComponent as SettingsSettingsIcon } from "../../../assets/img/icon/settings-settings.svg";
import { ReactComponent as SettingsLogoutIcon } from "../../../assets/img/icon/settings-logout.svg";
import { ReactComponent as TrainingIcon } from "../../../assets/img/icon/training.svg";
import { ReactComponent as WardDashboardIcon } from "../../../assets/img/icon/ward-dashboard.svg";
import { ReactComponent as WardEDIcon } from "../../../assets/img/icon/ward-ed.svg";
import { ReactComponent as WardRegAndAttendanceIcon } from "../../../assets/img/icon/ward-RegAndAttendance.svg";

// Import: Elements
import {
  Container,
  OptionHeading,
  OptionItem,
  OptionLink,
  Options,
  OptionsContainer,
  Settings,
  SettingsItem,
  Wrapper,
} from "./Navigation.elements";

// Component: Navigation
export default function Navigation({
  isNavigationOpen,
  setIsNavigationOpen,
  handleLogout,
}) {
  // State: windowDimensions
  const [windowDimensions, setWindowDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  // Effect: Checks window height and width
  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Container data-testid={"navigation"} isNavigationOpen={isNavigationOpen}>
        <Wrapper>
          <Options>
            {/* Ward */}
            <OptionsContainer>
              <OptionHeading>Ward</OptionHeading>

              <OptionLink
                to="/one-ed/ward/dashboard"
                onClick={
                  windowDimensions.width <= 1077
                    ? () =>
                        setIsNavigationOpen(
                          (isNavigationOpen) => !isNavigationOpen
                        )
                    : null
                }
              >
                <OptionItem>
                  <WardDashboardIcon />
                  <span>Dashboard</span>
                </OptionItem>
              </OptionLink>

              <OptionLink
                to="/one-ed/ward/ed-overview"
                onClick={
                  window.innerWidth <= 1077
                    ? () =>
                        setIsNavigationOpen(
                          (isNavigationOpen) => !isNavigationOpen
                        )
                    : null
                }
              >
                <OptionItem>
                  <WardEDIcon />
                  <span>ED Overview</span>
                </OptionItem>
              </OptionLink>

              <OptionLink
                to="/one-ed/ward/regandattendance"
                onClick={
                  window.innerWidth <= 1077
                    ? () =>
                        setIsNavigationOpen(
                          (isNavigationOpen) => !isNavigationOpen
                        )
                    : null
                }
              >
                <OptionItem>
                  <WardRegAndAttendanceIcon />
                  <span>Reg & Attendance</span>
                </OptionItem>
              </OptionLink>
            </OptionsContainer>

            {/* Patient */}
            <OptionsContainer>
              <OptionHeading>Patient</OptionHeading>
              <OptionLink
                to="/one-ed/patient/overview"
                onClick={
                  window.innerWidth <= 1077
                    ? () =>
                        setIsNavigationOpen(
                          (isNavigationOpen) => !isNavigationOpen
                        )
                    : null
                }
              >
                <OptionItem>
                  <PatientOverviewIcon />
                  <span>Overview</span>
                </OptionItem>
              </OptionLink>

              <OptionLink
                to="/one-ed/patient/cas-card"
                onClick={
                  window.innerWidth <= 1077
                    ? () =>
                        setIsNavigationOpen(
                          (isNavigationOpen) => !isNavigationOpen
                        )
                    : null
                }
              >
                <OptionItem>
                  <PatientCasIcon />
                  <span>CAS Card</span>
                </OptionItem>
              </OptionLink>
            </OptionsContainer>

            {/* Assessments */}
            <OptionsContainer>
              <OptionHeading>Assessments</OptionHeading>
              <OptionLink
                to="/one-ed/assessments/triage"
                onClick={
                  window.innerWidth <= 1077
                    ? () =>
                        setIsNavigationOpen(
                          (isNavigationOpen) => !isNavigationOpen
                        )
                    : null
                }
              >
                <OptionItem>
                  <AssessmentsTriageIcon />
                  <span>Triage</span>
                </OptionItem>
              </OptionLink>

              <OptionLink
                to="/one-ed/assessments/observations"
                onClick={
                  window.innerWidth <= 1077
                    ? () =>
                        setIsNavigationOpen(
                          (isNavigationOpen) => !isNavigationOpen
                        )
                    : null
                }
              >
                <OptionItem>
                  <AssessmentsObservationsIcon />
                  <span>Observations</span>
                </OptionItem>
              </OptionLink>

              <OptionLink
                to="/one-ed/assessments/seen"
                onClick={
                  window.innerWidth <= 1077
                    ? () =>
                        setIsNavigationOpen(
                          (isNavigationOpen) => !isNavigationOpen
                        )
                    : null
                }
              >
                <OptionItem>
                  <AssessmentsSeenIcon />
                  <span>Seen</span>
                </OptionItem>
              </OptionLink>

              <OptionLink
                to="/one-ed/assessments/clinical-notes"
                onClick={
                  window.innerWidth <= 1077
                    ? () =>
                        setIsNavigationOpen(
                          (isNavigationOpen) => !isNavigationOpen
                        )
                    : null
                }
              >
                <OptionItem>
                  <AssessmentsClinicalIcon />
                  <span>Clinical Notes</span>
                </OptionItem>
              </OptionLink>

              <OptionLink
                to="/one-ed/assessments/view-seen"
                onClick={
                  window.innerWidth <= 1077
                    ? () =>
                        setIsNavigationOpen(
                          (isNavigationOpen) => !isNavigationOpen
                        )
                    : null
                }
              >
                <OptionItem>
                  <AssessmentsViewIcon />
                  <span>View Seen</span>
                </OptionItem>
              </OptionLink>
            </OptionsContainer>

            <OptionsContainer>
              <OptionHeading>Admit or Referral</OptionHeading>
              <OptionLink
                to="/one-ed/admitorreferral"
                onClick={
                  window.innerWidth <= 1077
                    ? () =>
                        setIsNavigationOpen(
                          (isNavigationOpen) => !isNavigationOpen
                        )
                    : null
                }
              >
                <OptionItem>
                  <AdmitOrReferralIcon />
                  <span>Admit or Referral</span>
                </OptionItem>
              </OptionLink>
            </OptionsContainer>
          </Options>

          <Settings>
            <OptionHeading>User</OptionHeading>

            <OptionLink
              to="/one-ed/training"
              onClick={
                window.innerWidth <= 1077
                  ? () =>
                      setIsNavigationOpen(
                        (isNavigationOpen) => !isNavigationOpen
                      )
                  : null
              }
            >
              <SettingsItem>
                <TrainingIcon />
                <span>Training</span>
              </SettingsItem>
            </OptionLink>

            <OptionLink
              to="/one-ed/user/settings"
              onClick={
                window.innerWidth <= 1077
                  ? () =>
                      setIsNavigationOpen(
                        (isNavigationOpen) => !isNavigationOpen
                      )
                  : null
              }
            >
              <SettingsItem>
                <SettingsSettingsIcon />
                <span>Settings</span>
              </SettingsItem>
            </OptionLink>

            <SettingsItem onClick={handleLogout}>
              <SettingsLogoutIcon />
              <span>Log Out</span>
            </SettingsItem>
          </Settings>
        </Wrapper>
      </Container>
    </>
  );
}
