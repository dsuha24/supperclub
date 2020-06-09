import React from "react";
// import View from './style';
import TextField from "@material-ui/core/TextField";

const Input = ({
    label,
    value,
    size = "small",
    variant = "outlined",
    onChange,
    placeholder = "",
    fullWidth = "true",
    ...props
}) => (
    <TextField
        fullWidth={fullWidth}
        placeholder={placeholder}
        margin='normal'
        label={label}
        value={value}
        size={size}
        variant={variant}
        onChange={onChange}
        InputLabelProps={{
            shrink: true,
        }}
        {...props}
    />
);

export default Input;
