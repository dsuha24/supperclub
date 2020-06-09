import React from "react";
// import View from './style';
import MaterialButton from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";

const iconMap = {
    add: AddIcon,
    delete: DeleteIcon,
};

const Button = ({ type = "add", icon = false, size = "small", ...rest }) => {
    const IconType = iconMap[type];
    if (icon) {
        return (
            <IconButton size={size} {...rest}>
                <IconType />
            </IconButton>
        );
    }
    return <MaterialButton size={size} {...rest} />;
};

export default Button;
