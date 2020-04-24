import React from 'react';
import './IngredientSection.css';
import AcccessibleTable from '../UIElements/AccessibleTable';

// another way to create data table
// function createData(ingredient, amount, units, subs) {
//     return { ingredient, amount, units, subs};
// }
  
// const ROWS = [
//     createData('Bread Flour', 3, 'Cups', 3),
//     createData('Instant Yeast', '1/3', 'Tsp', 2),
//     createData('Euro Butter', 1, 'Cup', 1)
// ];

// import ROWS1 from "../../../user/UserData";

export default function IngredientSection(props) {
    return (
        <div className="ingredient-section">
            <h1>Ingredient</h1>
            <p>click on the boxes to change the measurements</p>
            <AcccessibleTable rows={props.list} 
                firstColumn="Ingredients"
                secondColumn="Amount"
                thirdColumn="Units"
                fourthColumn="Subs"
            />
        </div>
    );
}
