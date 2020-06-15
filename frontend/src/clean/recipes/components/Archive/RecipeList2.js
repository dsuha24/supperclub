import React from 'react';
import RecipeItem from '../RecipeItem';
import './RecipeList.css';

const RecipeList = props => {
    if (props.items.length === 0) {
      return (
        <div className="center">
            <h2>No users found.</h2>
        </div>
      );
    }
  
    return (
      <ul className="recipe-list">
        {props.items.map(recipe => (
          <RecipeItem
            key={recipe.id}
            id={recipe.id}
            image={recipe.image}
            name={recipe.recipeName}
            time={recipe.time}
            description={recipe.description}
            author={props.author}
          />
        ))}
      </ul>
    );
  };
  

export default RecipeList;



