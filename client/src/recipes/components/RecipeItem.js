import React from 'react';
import Card from '../../shared/components/UIElements/Card';

import RecipeModal from './UIElements/RecipeModal';

const RecipeItem = props => {
    // const handleItemClick = () => {
    //     // handle the click
    //     console.log('click: ', props.id)
    // }
      

    return(
        <div>
            <Card 
                image = {props.image}
                name = {props.name}
                description = {props.description}
                author = {props.author}
                onClick = {props.onClick}
                handleModalClose = {props.handleModalClose}
                open={props.open}
            />
            <RecipeModal 
                onClose={props.handleModalClose}
                open={props.open}
                recipeName={props.name}
                image={props.image}
                ingredients={props.ingredients}
                steps={props.steps}
                equipmentTable={props.equipmentTable}
            />
        </div>
        

    );
};

export default RecipeItem;