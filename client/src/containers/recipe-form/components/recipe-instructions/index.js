import React, { useState } from "react";
import View from "./style";

import Input from "../../../../components/input";
import Button from "../../../../components/button";
import ImageUpload from "../../../../components/image-upload";
import EquipmentForm from "../equipment-form";
import { INITIAL_STEP_STATE } from "../../utils";

const RecipeInstructions = ({ steps, editField, pushArray, deleteArray }) => {
    const [stepNumber, handleStep] = useState(steps.length - 1);
    const {
        shortDescription,
        longDescription,
        ingredients,
        equipment,
        image,
    } = steps[stepNumber];

    return (
        <View>
            <div className='recipe-instructions__description'>
                <Input
                    label='Short Description'
                    fullWidth={true}
                    className='recipe-instructions__short'
                    value={shortDescription}
                    onChange={(e) =>
                        editField(`steps[${stepNumber}].shortDescription`, e)
                    }
                />
                {/* <Input type='file' value={image} label='Image' /> */}
                <ImageUpload
                    image={image}
                    className='recipe-instructions__photo'
                    id='image'
                    field={`steps[${stepNumber}].image`}
                    onInput={editField}
                />
            </div>
            <Input
                label='Long Description'
                value={longDescription}
                multiline
                rows={2}
                rowsMax={2}
                onChange={(e) =>
                    editField(`steps[${stepNumber}].longDescription`, e)
                }
            />
            <EquipmentForm
                equipment={equipment}
                field={`steps[${stepNumber}].equipment`}
                pushArray={pushArray}
                deleteArray={deleteArray}
            />
            <EquipmentForm
                equipment={ingredients}
                field={`steps[${stepNumber}].ingredients`}
                pushArray={pushArray}
                deleteArray={deleteArray}
                labelName='Ingredients'
            />
            <Button
                color='primary'
                variant='outlined'
                onClick={() => {
                    pushArray("steps", { ...INITIAL_STEP_STATE });
                    handleStep(steps.length);
                }}
            >
                Add Step
            </Button>
            <Button
                color='primary'
                variant='outlined'
                onClick={() => {
                    deleteArray("steps", stepNumber);
                    handleStep(0);
                }}
            >
                Delete Step
            </Button>
            <div className='recipe-instructions__steps'>
                {steps.map((step, i) => (
                    <div
                        className='recipe-instructions__step'
                        onClick={() => handleStep(i)}
                    >
                        {i + 1}
                    </div>
                ))}
            </div>
        </View>
    );
};

export default RecipeInstructions;
