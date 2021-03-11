// Import: Packages
import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";

// Import: Components, Pages
import { Header, Navigation, ProtectedRoute } from "./app/components";
import { Dashboard, Home, Login, Unauthorized } from "./app/pages";

// Component: App
export default function App() {
  // State: isLoggedIn
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

      <Container>
        {isLoggedIn && <Redirect to="/one-ed/ward/dashboard" />}
        {!isLoggedIn && <Redirect to="/" />}
        {isLoggedIn && (
          <>
            <Header handleLogout={handleLogout} />
            <Navigation />
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
  grid-template-columns: 300px 1fr;
  grid-template-rows: 80px 1fr;
  height: 100%;
  width: 100%;
`;
