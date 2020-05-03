import React from 'react';

import RecipeList from '../components/RecipeList';
// import RecipeModal from '../components/UIElements/RecipeModal';
import FilterBar from '../../layout/navigation/Filters/FilterBar';

import "./Recipes.css";
// import RecipeInstructions from './RecipeInstructions';

const Recipes = props => {

  const {RECIPES} = props;

  const [filterCuisineArray, handleCuisineFilter] = React.useState([]);
  const [filterIngredientArray, handleIngredientFilter] = React.useState([]);
  const [filterEquipmentArray, handleEquipmentFilter] = React.useState([]);

  // const filteredRecipes = RECIPES.filter((item) => {
  //   // return item.cuisine.toLowerCase().includes(cuisineList.toLowerCase())
  //   if(filterArray.length === 0) {
  //     return item;
  //   }
  //   return filterArray.includes(item.cuisine);
    
  // })

  const filteredCuisineRecipes = RECIPES.filter(({ cuisine }) => {
    
    if(filterCuisineArray.length === 0){
      return cuisine;
    }
    const filteredCuisines = cuisine.filter(cuis => filterCuisineArray.includes(cuis.title));

    return filteredCuisines.length;
  });


  const filteredIngredientRecipes = RECIPES.filter(({ ingredients }) => {
    
    if(filterIngredientArray.length === 0){
      return ingredients;
    }
    const filteredIngredients = ingredients.filter(ingr => filterIngredientArray.includes(ingr.ingredient));

    return filteredIngredients.length;
  });

  const filteredEquipmentRecipes = RECIPES.filter(({ equipmentTable }) => {
    
    if(filterEquipmentArray.length === 0){
      return equipmentTable;
    }
    const filteredEquipments = equipmentTable.filter(equip => filterEquipmentArray.includes(equip.equipment));

    return filteredEquipments.length;
  });

  // console.log(filterCuisineArray);

  return (
    <div className="main-recipe-page">
      <FilterBar 
        //getting data from child
        handleCuisineFilter={handleCuisineFilter}
        handleIngredientFilter={handleIngredientFilter}
        handleEquipmentFilter={handleEquipmentFilter}
      />
      <div>
        <RecipeList 
          items = {filteredCuisineRecipes}
          // items = {filteredIngredientRecipes}
          // items = {filteredEquipmentRecipes}
          // items={RECIPES} 
          // onItemclick={handleModalOpen} 
          // open={open} 
          // handleModalClose={handleModalClose}
        >
          {/* <RecipeModal /> */}
        </RecipeList>
      </div>
      <br></br>
      {/* <RecipeModal onClose={handleModalClose} open={open}/> */}
      {/* <h1>Trending</h1>
      <div>
        <RecipeList items={RECIPES} />
      </div>
      <h1>Best recipes of the month</h1>
      <div>
        <RecipeList items={RECIPES} />
      </div> */}
    </div>
  );
};

export default Recipes;