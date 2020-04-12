import React from 'react';
import Card from '../../shared/components/UIElements/Card';

const RecipeItem = props => {
    return(
        <Card 
            image = {props.image}
            name = {props.name}
            description = {props.description}
            author = {props.author}
        />
    );
};

export default RecipeItem;