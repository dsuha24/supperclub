import React from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import Button from "@material-ui/core/button"

const CommentSection = props => {
    return (
        <div>
            <div>
                <div>
                    <CommentBox />
                </div>
                <div>
                    <Button type="submit" variant="outlined">SUBMIT</Button>
                </div>
            </div>
            <div>
                <CommentList />
            </div>
        </div>
        
    );
}

export default CommentSection;