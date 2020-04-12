import React from 'react';
import TextField from '@material-ui/core/TextField';

const CommentBox = props => {
    return (
        <TextField
          id="standard-multiline-static"
          label="Comment Box"
          multiline
          rows={4}
          defaultValue="Say some stuff..."
          variant="outlined"
        />
    );
}

export default CommentBox;