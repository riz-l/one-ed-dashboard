// Import: Packages
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Import: Elements
import { Container, Wrapper } from "./Login.elements";

// Import: Components
import { Form } from "../../components";

// Component: Login
export default function Login({ db, ...props }) {
  // State: loginForm, claimSetData
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const [claimSetData, setClaimSetData] = useState({
    apiData: [],
    authToken: "",
  });

  // Effect: Set claimSetData values to === values.LoginDetails
  // ... if no values are in the database, set values === ""
  useEffect(() => {
    // Create database store
    db.version(1).stores({ formData: "id, value" });

    // Read/write transaction on new database store
    db.transaction("rw", db.formData, async () => {
      // Get all claimSetData values from database data
      // const dbApiData = await db.formData.get("apiData");
      // const dbAuthToken = await db.formData.get("authToken");
      // If the claimSetData values have not been added, populate with []/""
      // if (!dbApiData) await db.formData.add({ id: "apiData", value: [] });
      // if (!dbAuthToken) await db.formData.add({ id: "authToken", value: "" });
      // Set the initial values
      // setClaimSetData({
      //   apiData: dbApiData ? dbApiData.value : [],
      //   authToken: dbAuthToken ? dbAuthToken.value : "",
      // });
    }).catch((error) => {
      console.log(error.stack || error);
      throw new Error(error.stack || error);
    });

    // Close the database connection if Login is unmounted
    // ... or if the database connection changes
    // return () => db.close();
  }, [db]);

  // Fetch Lorenzo authentication token
  const fetchLorenzoToken = (e) => {
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

      // Sets the values in LoginDetails
      const setStoreDetails = (id) => (value) => {
        // Update store
        db.formData.put({ id, value });
      };

      axios(config)
        .then(function (response) {
          // Update state
          setClaimSetData({
            apiData: response.data,
            authToken:
              response.data.ControlActEvent.Subject.Value[0].SecurityToken,
          });

          // Update LoginDetails
          setStoreDetails("apiData")(response.data);
          setStoreDetails("authToken")(
            response.data.ControlActEvent.Subject.Value[0].SecurityToken
          );
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    getClaimSetToken();
    e.preventDefault();
  };

  // Effect: If auth token retrieval is successful, redirect to Dashboard
  useEffect(() => {
    // Checks if the auth token is retrieved on login attempt
    if (claimSetData.authToken !== "" && claimSetData.authToken.length > 0) {
      props.setIsLoggedIn(true);
    } else {
      props.setIsLoggedIn(false);
    }
  }, [props, claimSetData.authToken]);

  // Sets the values in the state
  const setLoginFormValues = (id) => (value) => {
    // Update state
    setLoginForm((prevFormValues) => ({
      ...prevFormValues,
      [id]: value,
    }));
  };

  // Partial application to make on change handler easier to apply
  // ... used for text/password inputs
  const handleLoginFormValues = (id) => (e) => {
    setLoginFormValues(id)(e.target.value);
  };

  // Delete IndexedDB LoginDetails database
  function pleaseDelete() {
    indexedDB.deleteDatabase("LoginDetails").onsuccess = function () {
      console.log("LoginDetails Delete Successful");
    };
  }

  // Delete IndexedDB data on browser/tab close and/or refresh
  // ... prompts user that they are about to leave the page/lose data
  // window.addEventListener("beforeunload", () => pleaseDelete());
  window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    e.returnValue = "Are you sure you want to close?";
    pleaseDelete();
  });

  return (
    <>
      <Container data-testid={"login"}>
        <Wrapper>
          <h1>Login</h1>
          <p>
            <Link to="/one-ed/ward/dashboard">View Dashboard</Link>
          </p>

          <Form onSubmit={fetchLorenzoToken}>
            <Form.Input
              htmlFor="username"
              labelText="Username"
              onChange={handleLoginFormValues("username")}
              type="text"
              value={loginForm.username}
            />

            <Form.Input
              htmlFor="password"
              labelText="Password"
              onChange={handleLoginFormValues("password")}
              type="password"
              value={loginForm.password}
            />

            <Form.Input
              type="submit"
              value="Login"
              center
              margin="1.8rem 0 0 0"
              onSubmit={fetchLorenzoToken}
            />
          </Form>
        </Wrapper>
      </Container>
    </>
  );
}
