// Import: Packages
import React from "react";

// Import: Assets
import { ReactComponent as WardDashboardIcon } from "../../../assets/img/icon/ward-dashboard.svg";
import { ReactComponent as WardEDIcon } from "../../../assets/img/icon/ward-ed.svg";
import { ReactComponent as PatientOverviewIcon } from "../../../assets/img/icon/patient-overview.svg";
import { ReactComponent as PatientCasIcon } from "../../../assets/img/icon/patient-cas.svg";
import { ReactComponent as AssessmentsTriageIcon } from "../../../assets/img/icon/assessments-triage.svg";
import { ReactComponent as AssessmentsObservationsIcon } from "../../../assets/img/icon/assessments-observations.svg";
import { ReactComponent as AssessmentsSeenIcon } from "../../../assets/img/icon/assessments-seen.svg";
import { ReactComponent as AssessmentsClinicalIcon } from "../../../assets/img/icon/assessments-clinical.svg";
import { ReactComponent as AssessmentsViewIcon } from "../../../assets/img/icon/assessments-view.svg";
import { ReactComponent as SettingsSettingsIcon } from "../../../assets/img/icon/settings-settings.svg";
import { ReactComponent as SettingsLogoutIcon } from "../../../assets/img/icon/settings-logout.svg";

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
export default function Navigation({ handleLogout }) {
  return (
    <>
      <Container data-testid={"navigation"}>
        <Wrapper>
          <Options>
            {/* Ward */}
            <OptionsContainer>
              <OptionHeading>Ward</OptionHeading>
              <OptionLink to="/one-ed/ward/dashboard">
                <OptionItem>
                  <WardDashboardIcon />
                  <span>Dashboard</span>
                </OptionItem>
              </OptionLink>

              <OptionLink to="/one-ed/ward/ed-overview">
                <OptionItem>
                  <WardEDIcon />
                  <span>ED Overview</span>
                </OptionItem>
              </OptionLink>
            </OptionsContainer>

            {/* Patient */}
            <OptionsContainer>
              <OptionHeading>Patient</OptionHeading>
              <OptionLink to="/one-ed/patient/overview">
                <OptionItem>
                  <PatientOverviewIcon />
                  <span>Overview</span>
                </OptionItem>
              </OptionLink>

              <OptionLink to="/one-ed/patient/cas-card">
                <OptionItem>
                  <PatientCasIcon />
                  <span>CAS Card</span>
                </OptionItem>
              </OptionLink>
            </OptionsContainer>

            {/* Assessments */}
            <OptionsContainer>
              <OptionHeading>Assessments</OptionHeading>
              <OptionLink to="/one-ed/assessments/triage">
                <OptionItem>
                  <AssessmentsTriageIcon />
                  <span>Triage</span>
                </OptionItem>
              </OptionLink>

              <OptionLink to="/one-ed/assessments/observations">
                <OptionItem>
                  <AssessmentsObservationsIcon />
                  <span>Observations</span>
                </OptionItem>
              </OptionLink>

              <OptionLink to="/one-ed/assessments/seen">
                <OptionItem>
                  <AssessmentsSeenIcon />
                  <span>Seen</span>
                </OptionItem>
              </OptionLink>

              <OptionLink to="/one-ed/assessments/clinical-notes">
                <OptionItem>
                  <AssessmentsClinicalIcon />
                  <span>Clinical Notes</span>
                </OptionItem>
              </OptionLink>

              <OptionLink to="/one-ed/assessments/view-seen">
                <OptionItem>
                  <AssessmentsViewIcon />
                  <span>View Seen</span>
                </OptionItem>
              </OptionLink>
            </OptionsContainer>
          </Options>

          <Settings>
            <OptionLink to="/one-ed/user/settings">
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
