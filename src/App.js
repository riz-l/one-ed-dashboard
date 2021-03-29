// Import: Packages
import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components/macro";

// Import: Components, Pages
import { Header, Navigation, ProtectedRoute } from "./app/components";
import {
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
  Triage,
  Unauthorized,
  ViewSeen,
} from "./app/pages";

// Component: App
export default function App() {
  // State: isLoggedIn, isNavigationOpen
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isNavigationOpen, setIsNavigationOpen] = useState(true);

  // Sets isLoggedIn === true
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  // Sets isLoggedIn === false
  const handleLogout = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
  };

  return (
    <>
      {/* Home */}
      <Route exact path="/" component={Home} />

      {/* Login */}
      <Route
        exact
        path="/login"
        handleLogin={handleLogin}
        render={(props) => (
          <Login
            {...props}
            isLoggedIn={isLoggedIn.toString()}
            handleLogin={handleLogin}
          />
        )}
      />

      {/* 403: Unauthorized */}
      <Route exact path="/unauthorized" component={Unauthorized} />

      <Container isNavigationOpen={isNavigationOpen}>
        {isLoggedIn && <Redirect to="/one-ed/ward/dashboard" />}
        {!isLoggedIn && <Redirect to="/" />}
        {isLoggedIn && (
          <>
            <Header
              isNavigationOpen={isNavigationOpen}
              setIsNavigationOpen={setIsNavigationOpen}
            />
            <Navigation
              isNavigationOpen={isNavigationOpen}
              setIsNavigationOpen={setIsNavigationOpen}
              handleLogout={handleLogout}
            />
          </>
        )}

        <Switch>
          {/* OneED */}
          <ProtectedRoute
            exact
            path="/one-ed/ward/dashboard"
            isLoggedIn={isLoggedIn}
            component={Dashboard}
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

          {/* Assessments - View Seen */}
          <Route exact path="/one-ed/assessments/view-seen">
            <ViewSeen />
          </Route>

          {/* User - Settings */}
          <Route exact path="/one-ed/user/settings">
            <Settings />
          </Route>
        </Switch>
      </Container>
    </>
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
  }
`;
