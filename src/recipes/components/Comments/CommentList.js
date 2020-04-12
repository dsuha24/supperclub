import React from 'react';
import RecipeComments from './RecipeComments';

const CommentList= props => {
    return (
        <div>
            <h2>CommentList</h2>
            {/* props.items.map */}
            <RecipeComments />
        </div>
    );
}

export default CommentList;