import React from "react";
import ReactDOM from "react-dom";

// Components
import { AppWrapper } from "./AppWrapper";

// CSS
import "./index.css";

// Utils
import configureStore from "./stores";

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    window.getState = store.getState;
    ReactDOM.render(
        <AppWrapper store={store} />,
        document.getElementById("root")
    );
});
