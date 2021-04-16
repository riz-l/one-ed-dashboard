// Import: Packages
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Import: Elements
import { Container, Wrapper } from "./Login.elements";

// Import: Components
import { Form } from "../../components";

// Component: Login
export default function Login(props) {
  // State: loginForm, apiData, tokenData
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const [apiData, setApiData] = useState([]);
  const [token, setToken] = useState("");

  // Sets the values in the state
  const setFormValues = (id) => (value) => {
    // Update state
    setLoginForm((prevFormValues) => ({
      ...prevFormValues,
      [id]: value,
    }));
  };

  // Partial application to make on change handler easier to apply
  // ... used for text/password inputs
  const handleSetFormValues = (id) => (e) => setFormValues(id)(e.target.value);

  // Fetch Lorenzo authentication token
  const fetchLorenzoToken = () => {
    async function getClaimSetToken() {
      const apiUrl = process.env.REACT_APP_URL;
      const apiService = process.env.REACT_APP_SERVICE;
      const apiVersion = process.env.REACT_APP_API_VERSION;

      var config = {
        method: "get",
        url: `${apiUrl}/${apiService}/${apiVersion}/claimSet?UserName=${loginForm.username}&Password=${loginForm.password}`,
        headers: {
          accept: "application/json",
        },
      };

      axios(config)
        .then(function (response) {
          setApiData(response.data);
          setToken(
            response.data.ControlActEvent.Subject.Value[0].SecurityToken
          );
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    getClaimSetToken();
  };

  // Effect: If token retrieval is successful, redirect to Dashboard
  useEffect(() => {
    if (token !== "" && token.length > 0) {
      props.setIsLoggedIn(true);
    } else {
      props.setIsLoggedIn(false);
    }
  }, [props, token]);

  return (
    <>
      <Container data-testid={"login"}>
        <Wrapper>
          <h1>Login</h1>
          <p>
            <Link to="/one-ed/ward/dashboard">View Dashboard</Link>
          </p>

          <Form>
            <Form.Input
              labelText="Username"
              type="text"
              htmlFor="username"
              onChange={handleSetFormValues("username")}
              value={loginForm.username}
            />

            <Form.Input
              labelText="Password"
              type="password"
              htmlFor="password"
              onChange={handleSetFormValues("password")}
              value={loginForm.password}
            />

            <Form.Input
              type="submit"
              value="Login"
              center
              margin="1.8rem 0 0 0"
              onClick={fetchLorenzoToken}
            />

            {/* <Form.Input
              type="submit"
              value="Login"
              center
              margin="1.8rem 0 0 0"
              onClick={props.handleLogin}
            /> */}
          </Form>
        </Wrapper>
      </Container>
    </>
  );
}
