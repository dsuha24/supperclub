import React from "react";
import View from "./style";

// Utils
import { isInfoTab } from "../../utils";

const Nav = ({ formTab, handleFormTab }) => (
    <View>
        <div
            onClick={() => handleFormTab("info")}
            className={`nav__items ${isInfoTab(formTab) ? "selected" : ""}`}
        >
            01 basic info
        </div>
        <div
            onClick={() => handleFormTab("instructions")}
            className={`nav__items ${isInfoTab(formTab) ? "" : "selected"}`}
        >
            02 instructions
        </div>
    </View>
);

export default Nav;
