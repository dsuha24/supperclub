import React, {useEffect, useState} from "react";
// import { response } from "express";
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
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

  // for getting data
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [LoadedRecipes, setLoadedRecipes] = useState();

  // let cuisineFilter = ["French"];
 

  // const filteredCuisineRecipes = RECIPES.filter(({ cuisine }) => {
    
  //   if(filterCuisineArray.length === 0){
  //     return cuisine;
  //   }
  //   const filteredCuisines = cuisine.filter(cuis => filterCuisineArray.includes(cuis.title));

  //   return filteredCuisines.length;
  // });


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


  //get the recipes array from db
  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);
      try {
        // const response = await fetch('http://localhost:5000/api/recipes');
        const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/recipes');

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }
        // console.log(responseData.recipes);
        setLoadedRecipes(responseData.recipes);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };
    sendRequest();
  }, []);

  let filteredRecipes = [];
  if(typeof LoadedRecipes !== "undefined") {
    filteredRecipes = LoadedRecipes.filter((cuis) => {
      // return item.cuisine.toLowerCase().includes(cuisineList.toLowerCase())
      if(filterCuisineArray.length === 0) {
        return cuis;
      }
      console.log("LoadedRecipes", LoadedRecipes);
      console.log("item.cuisine", cuis.cuisine);
      console.log("filterCuisineArray", filterCuisineArray);
      console.log("filteredRecipes", filteredRecipes);
      return filterCuisineArray.includes(cuis.cuisine);
      // return cuis.cuisine.includes(filterCuisineArray)
    })
  }

  // console.log("loadedRecipes:", LoadedRecipes);

  const errorHandler = () => {
      setError(null);
  };

  return (
    <div className="main-recipe-page">
      <ErrorModal error={error} onClear={errorHandler}/>
      {isLoading && (
          <div className="center">
              <LoadingSpinner />
          </div>)}
      <FilterBar 
        //getting data from child
        handleCuisineFilter={handleCuisineFilter}
        handleIngredientFilter={handleIngredientFilter}
        handleEquipmentFilter={handleEquipmentFilter}
      />
      <br></br>
      <div>
      {!isLoading && LoadedRecipes && (
        <RecipeList 
          // items = {RECIPES}
          items = {filteredRecipes}
          // items = {LoadedRecipes}
          // items = {filteredIngredientRecipes}
          // items = {filteredEquipmentRecipes} 
        >
          {/* <RecipeModal /> */}
        </RecipeList>
      )}
      </div>
    </div>
  );
};

export default Recipes;