import React from 'react';
import Card from '../../shared/components/UIElements/Card';

import RecipeModal from './UIElements/RecipeModal';
import './RecipeItem.css'

const RecipeItem = props => {
    const [open, toggleModal] = React.useState(false);
    // const [inputOn, toggleInput] = React.useState(false);
    // const [input, setInput] = React.useState('');
    // const [newIngredients, setNewIngredients] = React.useState(null);
  
    const handleToggleModal= () => {
      toggleModal(open => !open);
    };


    //==== ingredient conversion ===============================
    // handleChange = (e) => {
    //     setInput(e.target.value)
    // }

    // useEffect(() => {
    //     // calculate amount here
    //     const ni = props.ingredients.map(ingredient => {
    //         ingredient.amount = recalculateAmount(ingredient.amount);
    //     })

       
    // }, [input])

 
    // return(
    //     {!inputOn ? <div></div> : <input onChange={handleChange}>}

    return(
        <div>
            <Card
                image = {props.image}
                // image={`http://localhost:5000/${props.image}`}
                name = {props.name}
                // description = {props.description}
                author = {props.author}
                onClick = {handleToggleModal}
                handleModalClose = {props.handleModalClose}
                open={props.open}
            />
            <RecipeModal 
                onClose={handleToggleModal}
                open={open}
                recipeName={props.name}
                // image={props.image}
                // image={`http://localhost:5000/${props.image}`}
                image={process.env.REACT_APP_ASSET_URL+`${props.image}`}
                ingredients={props.ingredients}
                // ingredients={newIngredients || props.ingredients}
                steps={props.steps}
                equipmentTable={props.equipmentTable}
                cuisine={props.cuisine}
                authorId={props.authorId}
                author={props.author}
                // commentList={props.commentList}
                // likes={props.likes}
                // saved={props.saved}
            />
        </div>
        

    );
};

export default RecipeItem;