import React from 'react';
import CommentSection from '../components/Comments/CommentSection';
import InstructionSection from '../components/InstructionSection';
import './RecipeInstructions.css';

const RecipeInstructions = props => {
    
    return (
        <div class="row recipe-instructions-container">
            <div className="comment-column left">
                <CommentSection />
            </div>
            <div className="instruction-column right">
                <InstructionSection
                    recipeName={props.recipeName}
                    image={props.image}
                    ingredients={props.ingredients}
                    steps={props.steps}
                    equipmentTable={props.equipmentTable}
                />
            </div>
        </div>
    );

};

export default RecipeInstructions;