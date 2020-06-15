import React, { useRef, useState, useEffect } from "react";
import axios from "axios";

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
    const filePickerRef = useRef();
    const [imageFile, handleImage] = useState();

    useEffect(() => {
        if (imageFile) {
            const formData = new FormData();
            formData.append("image", imageFile);
            axios
                .post("http://localhost:5000/api/uploads", formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                })
                .then((res) => {
                    debugger;
                    onInput(field, "", res.data["Location"]);
                })
                .catch((err) => console.log(err));
        }
    }, [imageFile]);

    const pickedHandler = (event) => {
        if (event.target.files && event.target.files.length === 1) {
            handleImage(event.target.files[0]);
        }
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
