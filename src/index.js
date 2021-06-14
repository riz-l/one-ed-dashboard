/// Import: Packages
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

// Import: Assets
import "./assets/fonts/Poppins/Poppins-Black.ttf";
import "./assets/fonts/Poppins/Poppins-BlackItalic.ttf";
import "./assets/fonts/Poppins/Poppins-Bold.ttf";
import "./assets/fonts/Poppins/Poppins-BoldItalic.ttf";
import "./assets/fonts/Poppins/Poppins-ExtraBold.ttf";
import "./assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf";
import "./assets/fonts/Poppins/Poppins-ExtraLight.ttf";
import "./assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf";
import "./assets/fonts/Poppins/Poppins-Light.ttf";
import "./assets/fonts/Poppins/Poppins-LightItalic.ttf";
import "./assets/fonts/Poppins/Poppins-Medium.ttf";
import "./assets/fonts/Poppins/Poppins-MediumItalic.ttf";
import "./assets/fonts/Poppins/Poppins-Regular.ttf";
import "./assets/fonts/Poppins/Poppins-RegularItalic.ttf";
import "./assets/fonts/Poppins/Poppins-SemiBold.ttf";
import "./assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf";
import "./assets/fonts/Poppins/Poppins-Thin.ttf";
import "./assets/fonts/Poppins/Poppins-ThinItalic.ttf";

// Import: Styling
import "./index.css";

// Import: Components
import App from "./App";

// Render: App
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
