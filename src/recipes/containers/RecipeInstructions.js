import React from 'react';
import CommentSection from '../components/Comments/CommentSection';
import InstructionSection from '../components/InstructionSection';
import './RecipeInstructions.css';

const RecipeInstructions = props => {

    return (
        <div class="row">
            <div className="comment-column left">
                <CommentSection />
            </div>
            <div className="instruction-column right">
                <InstructionSection />
            </div>
        </div>
    );

};

export default RecipeInstructions;