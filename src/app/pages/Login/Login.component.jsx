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
export default function Login(props) {
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

  // // Effect: If token retrieval is successful, redirect to Dashboard
  useEffect(() => {
    // Checks if token is retrieved on login attempt
    if (token !== "" && token.length > 0) {
      props.setIsLoggedIn(true);
    } else {
      props.setIsLoggedIn(false);
    }
  }, [token]);

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
