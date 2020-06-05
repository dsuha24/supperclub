import React, { Fragment } from "react";
import View from "./style";

import { useForm } from "../../utils/hooks/form-hooks";

// Constants
import {
    INITIAL_INGREDIENT_STATE,
    INITIAL_STEP_STATE,
    INITIAL_STATE,
} from "./utils";

const RecipeForm = () => {
    const [formState, dispatch, pushArray, deleteArray, editField] = useForm(
        INITIAL_STATE
    );

    const {
        title,
        image,
        description,
        cuisine,
        ingredients,
        equipment,
        steps,
    } = formState;

    return (
        <View>
            <form>
                <input value={title}>Title</input>
                <input value={image}>Image</input>
                <input value={description}>Description</input>
                <input value={cuisine}>Cuisine</input>
                {ingredients.map((ingredientObject) => {
                    const { ingredient, quantity, units } = ingredientObject;
                    return (
                        <Fragment key={ingredient}>
                            <input value={ingredient}>Ingredient</input>
                            <input value={quantity}>Quantity</input>
                            <input value={units}>Units</input>
                        </Fragment>
                    );
                })}
            </form>
        </View>
    );
};

export default RecipeForm;
