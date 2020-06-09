import React, { useState } from "react";
import View from "./style";

import Input from "../../../../components/input";
import Button from "../../../../components/button";

import { INITIAL_INGREDIENT_STATE } from "../../utils";

const IngredientsForm = ({
    ingredients,
    editField,
    pushArray,
    deleteArray,
}) => {
    return (
        <View>
            {ingredients.map((ingredientObject, i) => {
                const { ingredient, quantity, units } = ingredientObject;
                return (
                    <div className='ingredients-form__row' key={i}>
                        <Input
                            label='Ingredient'
                            value={ingredient}
                            onChange={(e) =>
                                editField(`ingredients[${i}].ingredient`, e)
                            }
                        />
                        <div>
                            <Input
                                type='number'
                                label='Quantity'
                                value={quantity}
                                onChange={(e) =>
                                    editField(`ingredients[${i}].quantity`, e)
                                }
                            />
                        </div>
                        <div>
                            <Input
                                label='Units'
                                value={units}
                                onChange={(e) =>
                                    editField(`ingredients[${i}].units`, e)
                                }
                            />
                        </div>
                        <div className='ingredients-form__buttons'>
                            <Button
                                type='add'
                                disabled={Object.values(ingredientObject).some(
                                    (el) => el === ""
                                )}
                                onClick={() =>
                                    pushArray("ingredients", {
                                        ...INITIAL_INGREDIENT_STATE,
                                    })
                                }
                                icon={true}
                                color='primary'
                            />
                            <Button
                                type='delete'
                                disabled={ingredients.length === 1}
                                onClick={() => deleteArray("ingredients", i)}
                                icon={true}
                                color='secondary'
                            />
                        </div>
                    </div>
                );
            })}
        </View>
    );
};

export default IngredientsForm;
