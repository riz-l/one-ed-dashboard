// Import: Packages
import React, { useState } from "react";
import styled from "styled-components/macro";
import { Redirect, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearClinicalNotesSlice } from "./redux/slices/clinicalNotesSlice";
import { clearIncomingPatientsSlice } from "./redux/slices/incomingPatientsSlice";
import { clearPatientListSlice } from "./redux/slices/patientListSlice";
import { clearSeenSlice } from "./redux/slices/seenSlice";
import { clearSelectedPatientSlice } from "./redux/slices/selectedPatientSlice";
import { clearTriageSlice } from "./redux/slices/triageSlice";
import { clearUserDetailsSlice } from "./redux/slices/userDetailsSlice";

// Import: Components, Pages
import { Header, Navigation, ProtectedRoute } from "./app/components";
import {
  AdmitOrReferral,
  CASCard,
  ClinicalNotes,
  Dashboard,
  EDOverview,
  Home,
  Login,
  Observations,
  Overview,
  Seen,
  Settings,
  Training,
  Triage,
  Unauthorized,
} from "./app/pages";

// Component: App
export default function App() {
  // Redux: useSelector, dispatch
  const selectedPatient = useSelector(
    (state) => state.selectedPatient.patientData
  );
  const userDetails = useSelector((state) => state.userDetails.details);
  const dispatch = useDispatch();

  // State: Local state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  // Sets isLoggedIn === true
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  // Sets isLoggedIn === false
  // ... also clears down all global state
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(clearClinicalNotesSlice());
    dispatch(clearIncomingPatientsSlice());
    dispatch(clearPatientListSlice());
    dispatch(clearSeenSlice());
    dispatch(clearSelectedPatientSlice());
    dispatch(clearTriageSlice());
    dispatch(clearUserDetailsSlice());
    setIsLoggedIn(false);
  };

  return (
    <div data-testid={"app"}>
      {/* Home */}
      <Route exact path="/" component={Home} />

      {/* Login */}
      <Route
        exact
        handleLogin={handleLogin}
        path="/login"
        render={(props) => (
          <Login
            handleLogin={handleLogin}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            {...props}
          />
        )}
      />

      {/* 403: Unauthorized */}
      <Route component={Unauthorized} exact path="/unauthorized" />

      <Container isNavigationOpen={isNavigationOpen}>
        {isLoggedIn && !selectedPatient && (
          <Redirect to="/one-ed/ward/dashboard" />
        )}
        {!userDetails && <Redirect to="/unauthorized" />}
        {isLoggedIn && <Redirect to="/one-ed/ward/dashboard" />}
        {!isLoggedIn && <Redirect to="/" />}
        {isLoggedIn && (
          <>
            <Header
              isNavigationOpen={isNavigationOpen}
              setIsNavigationOpen={setIsNavigationOpen}
            />
            <Navigation
              handleLogout={handleLogout}
              isNavigationOpen={isNavigationOpen}
              setIsNavigationOpen={setIsNavigationOpen}
            />
          </>
        )}

        <Switch>
          {/* OneED */}
          <ProtectedRoute
            component={Dashboard}
            exact
            isLoggedIn={isLoggedIn}
            path="/one-ed/ward/dashboard"
          />

          {/* Ward - Dashboard */}
          <Route exact path="/one-ed/ward/dashboard">
            <Dashboard />
          </Route>

          {/* Ward - ED Overview */}
          <Route exact path="/one-ed/ward/ed-overview">
            <EDOverview />
          </Route>

          {/* Patient - Overview */}
          <Route exact path="/one-ed/patient/overview">
            <Overview />
          </Route>

          {/* Patient - CAS Card */}
          <Route exact path="/one-ed/patient/cas-card">
            <CASCard />
          </Route>

          {/* Assessments - Triage */}
          <Route exact path="/one-ed/assessments/triage">
            <Triage />
          </Route>

          {/* Assessments - Observations */}
          <Route exact path="/one-ed/assessments/observations">
            <Observations />
          </Route>

          {/* Assessments - Seen */}
          <Route exact path="/one-ed/assessments/seen">
            <Seen />
          </Route>

          {/* Assessments - Clinical Notes */}
          <Route exact path="/one-ed/assessments/clinical-notes">
            <ClinicalNotes />
          </Route>

          {/* Assessments - Admit or Referral */}
          <Route exact path="/one-ed/admit-or-referral">
            <AdmitOrReferral />
          </Route>

          {/* User - Training */}
          <Route exact path="/one-ed/training">
            <Training />
          </Route>

          {/* User - Settings */}
          <Route exact path="/one-ed/user/settings">
            <Settings />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

// Element: Container
const Container = styled.div`
  background-color: #f7f8fa;
  display: grid;
  grid-template-areas:
    "header header"
    "navigation content";
  grid-template-columns: ${({ isNavigationOpen }) =>
    isNavigationOpen ? "300px 1fr" : "0 1fr"};
  grid-template-rows: auto auto;
  height: 100%;
  transition: all 100ms linear;
  width: 100%;
  max-width: 100vw;

  @media screen and (max-width: 1077px) {
    grid-template-columns: ${({ isNavigationOpen }) =>
      isNavigationOpen ? "1fr 0" : "0 1fr"};
    overflow-x: hidden;
    transition: all 100ms linear;
  }
`;
