import React, { useRef, useState } from "react";

// import Button from "../../clean/shared/components/FormElements/Button";
import Button from "../button";
import Input from "../input";
import "./style.css";

const ImageUpload = ({
    id,
    center,
    errorText,
    onInput,
    field,
    className = "",
    image,
}) => {
    const [file, setFile] = useState();

    const filePickerRef = useRef();

    const pickedHandler = (event) => {
        let pickedFile;
        if (event.target.files && event.target.files.length === 1) {
            pickedFile = event.target.files[0];
            setFile(pickedFile);
        }
        onInput(field, event, pickedFile);
    };

    const pickImageHandler = () => {
        filePickerRef.current.click();
    };

    return (
        <div className={`form-control ${className}`}>
            <input
                id={id}
                ref={filePickerRef}
                style={{ display: "none" }}
                type='file'
                accept='.jpg,.png,.jpeg'
                onChange={pickedHandler}
            />
            <div onClick={pickImageHandler} className='image-upload__uploader'>
                <Input
                    label='Image'
                    placeholder={
                        image ? "Image Selected" : "Please Select File"
                    }
                    disabled
                    variant='outlined'
                ></Input>
                <Button
                    className='image-upload__button'
                    fullWidth={true}
                    color='primary'
                    size='medium'
                    variant='contained'
                >
                    PICK IMAGE
                </Button>
            </div>
        </div>
    );
};

export default ImageUpload;
