import React, { useState } from "react";
import View from "./style";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";

import Sessions from "../../components/sessions";

const Nav = ({ session, loginUser }) => {
    const [isOpen, handleOpen] = useState(false);
    return (
        <View>
            <AppBar position='static'>
                <Toolbar
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Typography variant='h6'>App Name</Typography>
                    <Button onClick={() => handleOpen(true)} color='inherit'>
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
            <Modal
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                }}
                open={isOpen}
                onClose={() => handleOpen(false)}
            >
                <Sessions handleOpen={handleOpen} />
            </Modal>
        </View>
    );
};

export default Nav;
