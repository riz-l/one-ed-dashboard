// Import: Packages
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addPassword,
  addUsername,
  getUserDetails,
} from "../../../redux/slices/userDetailsSlice";

// Import: Assets
import DedalusLogo from "../../../assets/img/logo/dedalusLogo.png";
import { ReactComponent as LogoSvg } from "../../../assets/img/logo/logoBlue.svg";

// Import: Elements
import { CompanyLogo, Container, Logo, Wrapper } from "./Login.elements";

// Import: Components
import { Form } from "../../components";

// Page: Login
export default function Login(props) {
  // Redux: useSelector, useDispatch
  const token = useSelector((state) => state.userDetails.token);
  const dispatch = useDispatch();

  // Ref: Used for login form
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  // Adds username, password to Redux
  const addUsernameToRedux = () => {
    dispatch(addUsername(usernameInputRef.current.value));
  };
  const addPasswordToRedux = () => {
    dispatch(addPassword(passwordInputRef.current.value));
  };

  // Submit username, password to API
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

  // Effect: If token retrieval is successful, redirect to Dashboard
  useEffect(() => {
    // Checks if token is retrieved on login attempt
    if (token !== "" && token.length > 0) {
      props.setIsLoggedIn && props.setIsLoggedIn(true);
    } else {
      props.setIsLoggedIn && props.setIsLoggedIn(false);
    }
  }, [props, token]);

  return (
    <>
      <Container data-testid={"login"}>
        <Wrapper>
          <Logo>
            <LogoSvg />
          </Logo>

          {/* Below is a link to the unauthorised page. Uncomment if needed for testing. */}
          {/* <p>
            <Link to="/unauthorized">unauthorized test page</Link>
          </p> */}

          <p>
            <Link to="/one-ed/ward/dashboard">View Dashboard</Link>
          </p>

          <Form onSubmit={submitTestForm}>
            <Form.Input
              htmlFor="username"
              labelText="Username"
              onChange={addUsernameToRedux}
              ref={usernameInputRef}
              type="text"
            />

            <Form.Input
              htmlFor="password"
              labelText="Password"
              onChange={addPasswordToRedux}
              ref={passwordInputRef}
              type="password"
            />

            <Form.Button margin="2rem 0 0 0" text="Login" type="submit" />
          </Form>
        </Wrapper>

        <CompanyLogo>
          <img alt="Dedalus Logo" id="dedalusLogo" src={DedalusLogo} />

          <div>
            <p style={{ paddingRight: "6px" }}>&copy; 2021</p>
            <p>Dedalus Group</p>
          </div>
        </CompanyLogo>
      </Container>
    </>
  );
}
