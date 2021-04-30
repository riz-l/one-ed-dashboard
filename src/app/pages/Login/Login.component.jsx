// Import: Packages
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  addUsername,
  addPassword,
  getUserDetails,
} from "../../../redux/slices/userDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";

// Import: Elements
import { Container, Wrapper } from "./Login.elements";

// Import: Components
import { Form } from "../../components";

// Page: Login
export default function Login({ db, ...props }) {
  const token = useSelector((state) => state.userDetails.token);
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const dispatch = useDispatch();

  const addUsernameToRedux = () => {
    dispatch(addUsername(usernameInputRef.current.value));
  };

  const addPasswordToRedux = () => {
    dispatch(addPassword(passwordInputRef.current.value));
  };

  const submitTestForm = async (event) => {
    event.preventDefault();
    const username = usernameInputRef.current.value;
    const password = passwordInputRef.current.value;
    if (username === "" || password === "") return;

    try {
      dispatch(getUserDetails());
    } catch (err) {
      console.log(err);
    }
  };

  // // Effect: If auth token retrieval is successful, redirect to Dashboard
  useEffect(() => {
    // Checks if the auth token is retrieved on login attempt
    if (token !== "" && token.length > 0) {
      props.setIsLoggedIn(true);
    } else {
      props.setIsLoggedIn(false);
    }
  }, [token]);

  // Fetch Lorenzo authentication token
  // const fetchLorenzoToken = (e) => {
  //   async function getClaimSetToken() {
  //     const apiUrl = process.env.REACT_APP_URL;
  //     const apiService = process.env.REACT_APP_SERVICE;
  //     const apiVersion = process.env.REACT_APP_API_VERSION;

  //     var config = {
  //       method: "get",
  //       url: `${apiUrl}/${apiService}/${apiVersion}/claimSet?UserName=${loginForm.username}&Password=${loginForm.password}`,
  //       headers: {
  //         accept: "application/json",
  //       },
  //     };

  //     // Sets the values in LoginDetails
  //     const setStoreDetails = (id) => (value) => {
  //       // Update store
  //       db.formData.put({ id, value });
  //     };

  //     axios(config)
  //       .then(function (response) {
  //         // Update state
  //         setClaimSetData({
  //           apiData: response.data,
  //           authToken:
  //             response.data.ControlActEvent.Subject.Value[0].SecurityToken,
  //         });

  //         // Update LoginDetails
  //         setStoreDetails("apiData")(response.data);
  //         setStoreDetails("authToken")(
  //           response.data.ControlActEvent.Subject.Value[0].SecurityToken
  //         );
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   }

  //   getClaimSetToken();
  //   e.preventDefault();
  // };

  return (
    <>
      <Container data-testid={"login"}>
        <Wrapper>
          <h1>Login</h1>
          <p>
            <Link to="/one-ed/ward/dashboard">View Dashboard</Link>
          </p>

          <form onSubmit={submitTestForm}>
            <input
              type="text"
              placeholder="test username"
              ref={usernameInputRef}
              onChange={addUsernameToRedux}
            />
            <input
              type="password"
              placeholder="test password"
              ref={passwordInputRef}
              onChange={addPasswordToRedux}
            />
            <button type="submit">Submit</button>
          </form>
        </Wrapper>
      </Container>
    </>
  );
}
