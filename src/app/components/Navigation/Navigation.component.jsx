// Import: Packages
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Import: Assets
import { ReactComponent as AdmitOrReferralIcon } from "../../../assets/img/icon/admitOrReferralIcon.svg";
import { ReactComponent as AssessmentsClinicalIcon } from "../../../assets/img/icon/assessments-clinical.svg";
import { ReactComponent as AssessmentsObservationsIcon } from "../../../assets/img/icon/assessments-observations.svg";
import { ReactComponent as AssessmentsSeenIcon } from "../../../assets/img/icon/assessments-seen.svg";
import { ReactComponent as AssessmentsTriageIcon } from "../../../assets/img/icon/assessments-triage.svg";
import { ReactComponent as PatientCasIcon } from "../../../assets/img/icon/patient-cas.svg";
import { ReactComponent as PatientOverviewIcon } from "../../../assets/img/icon/patient-overview.svg";
import { ReactComponent as SettingsLogoutIcon } from "../../../assets/img/icon/settings-logout.svg";
import { ReactComponent as SettingsSettingsIcon } from "../../../assets/img/icon/settings-settings.svg";
import { ReactComponent as TrainingIcon } from "../../../assets/img/icon/training.svg";
import { ReactComponent as WardDashboardIcon } from "../../../assets/img/icon/ward-dashboard.svg";
import { ReactComponent as WardEDIcon } from "../../../assets/img/icon/ward-ed.svg";

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
  // Redux: useSelector
  const patient = useSelector((state) => {
    if (state.selectedPatient.patient) {
      return state.selectedPatient.patient;
    }
  });

  // State: Local state
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
                onClick={
                  windowDimensions.width <= 1077
                    ? () =>
                        setIsNavigationOpen(
                          (isNavigationOpen) => !isNavigationOpen
                        )
                    : null
                }
                to="/one-ed/ward/dashboard"
              >
                <OptionItem>
                  <WardDashboardIcon />
                  <span>Dashboard</span>
                </OptionItem>
              </OptionLink>

              <OptionLink
                onClick={
                  window.innerWidth <= 1077
                    ? () =>
                        setIsNavigationOpen(
                          (isNavigationOpen) => !isNavigationOpen
                        )
                    : null
                }
                to="/one-ed/ward/ed-overview"
              >
                <OptionItem>
                  <WardEDIcon />
                  <span>ED Overview</span>
                </OptionItem>
              </OptionLink>
            </OptionsContainer>

            {patient && patient.length > 0 && (
              <>
                {/* Patient */}
                <OptionsContainer>
                  <OptionHeading>Patient</OptionHeading>
                  <OptionLink
                    onClick={
                      window.innerWidth <= 1077
                        ? () =>
                            setIsNavigationOpen(
                              (isNavigationOpen) => !isNavigationOpen
                            )
                        : null
                    }
                    to="/one-ed/patient/overview"
                  >
                    <OptionItem>
                      <PatientOverviewIcon />
                      <span>Overview</span>
                    </OptionItem>
                  </OptionLink>

                  <OptionLink
                    onClick={
                      window.innerWidth <= 1077
                        ? () =>
                            setIsNavigationOpen(
                              (isNavigationOpen) => !isNavigationOpen
                            )
                        : null
                    }
                    to="/one-ed/patient/cas-card"
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
                    onClick={
                      window.innerWidth <= 1077
                        ? () =>
                            setIsNavigationOpen(
                              (isNavigationOpen) => !isNavigationOpen
                            )
                        : null
                    }
                    to="/one-ed/assessments/triage"
                  >
                    <OptionItem>
                      <AssessmentsTriageIcon />
                      <span>Triage</span>
                    </OptionItem>
                  </OptionLink>

                  <OptionLink
                    onClick={
                      window.innerWidth <= 1077
                        ? () =>
                            setIsNavigationOpen(
                              (isNavigationOpen) => !isNavigationOpen
                            )
                        : null
                    }
                    to="/one-ed/assessments/observations"
                  >
                    <OptionItem>
                      <AssessmentsObservationsIcon />
                      <span>Observations</span>
                    </OptionItem>
                  </OptionLink>

                  <OptionLink
                    onClick={
                      window.innerWidth <= 1077
                        ? () =>
                            setIsNavigationOpen(
                              (isNavigationOpen) => !isNavigationOpen
                            )
                        : null
                    }
                    to="/one-ed/assessments/seen"
                  >
                    <OptionItem>
                      <AssessmentsSeenIcon />
                      <span>Seen</span>
                    </OptionItem>
                  </OptionLink>

                  <OptionLink
                    onClick={
                      window.innerWidth <= 1077
                        ? () =>
                            setIsNavigationOpen(
                              (isNavigationOpen) => !isNavigationOpen
                            )
                        : null
                    }
                    to="/one-ed/assessments/clinical-notes"
                  >
                    <OptionItem>
                      <AssessmentsClinicalIcon />
                      <span>Clinical Notes</span>
                    </OptionItem>
                  </OptionLink>
                </OptionsContainer>

                {/* Admit or Referral */}
                <OptionsContainer>
                  <OptionHeading>Admit or Referral</OptionHeading>
                  <OptionLink
                    onClick={
                      window.innerWidth <= 1077
                        ? () =>
                            setIsNavigationOpen(
                              (isNavigationOpen) => !isNavigationOpen
                            )
                        : null
                    }
                    to="/one-ed/admit-or-referral"
                  >
                    <OptionItem>
                      <AdmitOrReferralIcon />
                      <span>Admit or Referral</span>
                    </OptionItem>
                  </OptionLink>
                </OptionsContainer>
              </>
            )}
          </Options>

          {/* User */}
          <Settings>
            <OptionHeading>User</OptionHeading>

            <OptionLink
              onClick={
                window.innerWidth <= 1077
                  ? () =>
                      setIsNavigationOpen(
                        (isNavigationOpen) => !isNavigationOpen
                      )
                  : null
              }
              to="/one-ed/training"
            >
              <SettingsItem>
                <TrainingIcon />
                <span>Training</span>
              </SettingsItem>
            </OptionLink>

            <OptionLink
              onClick={
                window.innerWidth <= 1077
                  ? () =>
                      setIsNavigationOpen(
                        (isNavigationOpen) => !isNavigationOpen
                      )
                  : null
              }
              to="/one-ed/user/settings"
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
