import React from 'react';
import RecipeComments from './RecipeComments';


const COMMENTLIST = [
    {
        key: "c1",
        cid: "c1",
        username: "darylsuharli",
        comment: "WOW so fkn good",
        commentLikes: 103,
        commentDate: "4/20/2020",
        replies: [
            {
                key: "r1",
                cid: "r1",
                username: "darylsuharli",
                reply: "dude why are you replying to yourself heheheheh",
                replyLikes: 3,
                replyDate: "4/21/2020",
            }
        ]
    },
    {
        key: "c2",
        cid: "c2",
        username: "kobebryant",
        comment: "Nah it's not that good bich",
        commentLikes: 19398,
        commentDate: "4/20/2020",
        replies: [
            {
                key: "r2",
                cid: "r2",
                username: "",
                reply: "",
                replyLikes: "",
                replyDate: "",
            }
        ]
    },
]

const CommentList= props => {
    return (
        <div>
            <h2>Comments</h2>
            {COMMENTLIST.map(c => (
            <RecipeComments
                key={c.key}
                cid={c.cid}
                username={c.username}
                comment={c.comment}
                commentLikes={c.commentLikes}
                commentDate={c.commentDate}
                replies={c.replies}
            />
          ))} 
        </div>
    );
}

export default CommentList;