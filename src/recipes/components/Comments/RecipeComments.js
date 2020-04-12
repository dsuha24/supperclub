import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ReplyIcon from '@material-ui/icons/Reply';

const RecipeComments = props => {
    return (
        <div>
            <h2>Username</h2>
            <p>user comment</p>
            <h5>comment likes</h5>
            <h5>comment date</h5>
            <FavoriteBorderIcon fontSize="small"/>
            <ReplyIcon fontSize="small" />
        </div>
    );
}

export default RecipeComments;