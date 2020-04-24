import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ReplyIcon from '@material-ui/icons/Reply';

const RecipeComments = props => {
    return (
        <div>
            <h4>{props.comment}</h4>
            <p>{props.username}</p>
            <h5>{props.commentLikes}</h5>
            <h5>{props.commentDate}</h5>
            {/* <p>{props.replies}</p> */}
            {/* {props.replies.map(r => (
                <div>
                    <p>{r.username}</p>
                    <p>{r.reply}</p>
                    <p>{r.replyLikes}</p>
                    <p>{r.replyDates}</p>
                </div>
            ))} */}
            <FavoriteBorderIcon fontSize="small"/>
            <ReplyIcon fontSize="small" />
        </div>
    );
}

export default RecipeComments;