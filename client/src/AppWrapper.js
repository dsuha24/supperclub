import React from "react";

// Utils
import { Provider } from "react-redux";
import { ThemeProvider } from "emotion-theming";
import { variables } from "./utils/theme";

//App
import App from "./App";

export const AppWrapper = ({ store }) => (
    <Provider store={store}>
        <ThemeProvider theme={variables}>
            <App />
        </ThemeProvider>
    </Provider>
);
