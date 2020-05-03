import React from 'react';
// import CommentBox from './CommentBox';
import CommentList from './CommentList';
// import {Formik, Field, Form} from 'formik';
// import { makeStyles } from '@material-ui/core/styles';
import {TextField, Button} from '@material-ui/core';
// import {TextField, Button, MenuItem, FormControl, InputLabel, Input} from '@material-ui/core';

const CommentSection = props => {

    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
        // console.log(value)
      };

    //=== submit the comment ===============
    function handleSubmit(event) {
        console.log(value);
    } 

    return (
        <div>
            <div>
                <div>
                <TextField
                    id="standard-multiline-flexible"
                    label="Say something"
                    multiline
                    // placeholder="say something"
                    rows={4}
                    variant="outlined"
                    value={value}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <Button type="submit" variant="outlined"
                        onClick={handleSubmit}
                    >
                        SUBMIT
                    </Button>
                </div>
            </div>
            <div>
                <CommentList 
                    commentList={props.commentList}
                />
            </div>
        </div>
        
    );
}

export default CommentSection;