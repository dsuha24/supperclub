import React from "react";
import ReactDOM from "react-dom";

// Components
import App from "./containers/app";

// CSS
import "./utils/styling/index.css";

// Utils
import configureStore from "./stores";
import { Provider } from "react-redux";
import { ThemeProvider } from "emotion-theming";
import { variables } from "./utils/styling/theme";
import { setAuthToken } from "./utils/auth";
import jwt_decode from "jwt-decode";
import { receiveCurrentUser } from "./stores/actions/sessions";

const store = configureStore();
if (localStorage.jwtToken) {
    // Set auth token header auth
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(receiveCurrentUser(decoded));
}

document.addEventListener("DOMContentLoaded", () => {
    window.getState = store.getState;
    ReactDOM.render(
        <Provider store={store}>
            <ThemeProvider theme={variables}>
                <App />
            </ThemeProvider>
        </Provider>,
        document.getElementById("root")
    );
});
