import React from "react";
import TextField from "@material-ui/core/TextField";

const Input = ({
    label,
    value,
    size = "small",
    variant = "outlined",
    onChange,
    placeholder = "",
    fullWidth = true,
    maxLength = null,
    minLength= null,
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
        inputProps={{
            maxLength,
            minLength
        }}
        InputLabelProps={{
            shrink: true,
        }}

        {...props}
    />
);

export default Input;
