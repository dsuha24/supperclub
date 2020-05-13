import React from 'react';
import CommentSection from '../components/Comments/CommentSection';
import InstructionSection from '../components/InstructionSection';
import './RecipeInstructions.css';
import { useParams } from 'react-router-dom';

const RecipeInstructions = props => {
    
    return (
        <div className="row recipe-instructions-container">
            <div className="comment-column left">
                <button>Save Recipe </button>
                <CommentSection 
                    commentList={props.commentList}
                />
            </div>
            <div className="instruction-column right">
                <InstructionSection
                    recipeName={props.recipeName}
                    image={props.image}
                    ingredients={props.ingredients}
                    steps={props.steps}
                    cuisine={props.cuisine}
                    equipmentTable={props.equipmentTable}
                    likes={props.likes}
                    saved={props.saved}
                    authorId={props.authorId}
                    author={props.author}
                />
            </div>
        </div>
    );

};

export default RecipeInstructions;