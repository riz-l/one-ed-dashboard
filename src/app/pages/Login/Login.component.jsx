// Import: Packages
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addUsername,
  addPassword,
  getUserDetails,
} from "../../../redux/slices/userDetailsSlice";

// Import: Elements
import { Container, Wrapper } from "./Login.elements";

// Import: Components
import { Form } from "../../components";

// Page: Login
export default function Login(props) {
  // Redux:
  const token = useSelector((state) => state.userDetails.token);
  const dispatch = useDispatch();

  // Ref:
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

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
  }, [token, props]);

  return (
    <>
      <Container data-testid={"login"}>
        <Wrapper>
          <h1>Login</h1>
          <p>
            <Link to="/one-ed/ward/dashboard">View Dashboard</Link>
          </p>

          <Form onSubmit={submitTestForm}>
            <Form.Input
              labelText="Username"
              onChange={addUsernameToRedux}
              type="text"
              ref={usernameInputRef}
            />

            <Form.Input
              labelText="Password"
              onChange={addPasswordToRedux}
              type="password"
              ref={passwordInputRef}
            />

            <Form.Button type="submit" text="Login" margin="2rem 0 0 0" />
          </Form>
        </Wrapper>
      </Container>
    </>
  );
}
