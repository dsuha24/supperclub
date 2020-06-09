import React from "react";
import View from "./style";

import Input from "../../../../components/input";
import EquipmentForm from "../equipment-form";

const RecipeInstructions = ({ steps, editField, pushArray, deleteArray }) => {
    let index = steps.length - 1;
    const {
        shortDescription,
        longDescription,
        ingredients,
        equipment,
        image,
    } = steps[index];
    return (
        <View>
            <div className='recipe-instructions__description'>
                <Input
                    label='Short Description'
                    onChange={(e) =>
                        editField(`steps[${index}].shortDescription`, e)
                    }
                />
                <Input type='file' value={image} label='Image' />
            </div>
            <Input
                label='Long Description'
                multiline
                rows={2}
                rowsMax={2}
                onChange={(e) =>
                    editField(`steps[${index}].longDescription`, e)
                }
            />
            <EquipmentForm
                equipment={equipment}
                field={`steps[${index}].equipment`}
                pushArray={pushArray}
                deleteArray={deleteArray}
            />
            <EquipmentForm
                equipment={ingredients}
                field={`steps[${index}].ingredients`}
                pushArray={pushArray}
                deleteArray={deleteArray}
                labelName='Ingredients'
            />
            <div>
                {steps.map((step) => (
                    <div>{step.shortDescription}</div>
                ))}
            </div>
        </View>
    );
};

export default RecipeInstructions;
