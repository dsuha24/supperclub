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

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
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
