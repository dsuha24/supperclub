import React, { useState } from "react";
import View from "./style";
import { connect } from "react-redux";

// Hooks
import { useForm } from "../../utils/hooks/form-hooks";

import { loginUser } from "../../stores/actions/sessions";
import Button from "../../components/button";
import Input from "../../components/input";

const INITIAL_LOGIN_FORM = {
    email: "",
    password: "",
};

// const INITIAL_SIGNUP_FORM = {
//     name: { value: "", field: "name" },
//     email: { value: "", field: "email" },
//     image: "",
//     password: { value: "", field: "password", type: "password" },
// };

const Sessions = ({ loginUser, handleOpen }) => {
    const { formState, editField } = useForm(INITIAL_LOGIN_FORM);

    return (
        <View>
            <h3>Login</h3>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    loginUser(formState);
                    handleOpen(false);
                }}
            >
                <Input
                    onChange={(e) => editField("email", e)}
                    label='Email'
                    type='text'
                ></Input>
                <Input
                    onChange={(e) => editField("password", e)}
                    label='Password'
                    type='password'
                ></Input>
                <Button
                    size='medium'
                    color='primary'
                    variant='contained'
                    type='submit'
                >
                    Submit
                </Button>
            </form>
        </View>
    );
};

function isLoginForm(pageType) {
    return pageType === "login";
}

const mapStateToProps = (state) => ({
    session: state.session,
});

const mapDispatchToProps = (dispatch) => ({
    loginUser: (userData) => dispatch(loginUser(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sessions);
