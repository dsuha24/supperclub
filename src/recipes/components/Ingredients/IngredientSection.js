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

const ROWS1 = [
    {
        ingredient: 'Bread Flour',
        amount: 3,
        units: 'Cups',
        subs: '3'
    },
    {
        ingredient: 'Instant Yeast',
        amount: '1/3',
        units: 'Tsp',
        subs: 2
    },
    {
        ingredient: 'Euro Butter',
        amount: 1,
        units: 'Cups',
        subs: 1
    }
]

export default function IngredientSection(props) {
    return (
        <div className="ingredient-section">
            <h1>Ingredient</h1>
            <p>click on the boxes to change the measurements</p>
            <AcccessibleTable rows={ROWS1} 
                firstColumn="Ingredients"
                secondColumn="Amount"
                thirdColumn="Units"
                fourthColumn="Subs"
            />
        </div>
    );
}
