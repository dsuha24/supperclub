import React, { useState, useEffect } from "react";
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
                    maxLength="30"
                    className='recipe-instructions__short'
                    value={shortDescription}
                    onChange={(e) =>
                        editField(`steps[${stepNumber}].shortDescription`, e)
                    }
                />
                <ImageUpload
                    className='recipe-instructions__photo'
                    id='image'
                    image={image}
                    field={`steps[${stepNumber}].image`}
                    onInput={editField}
                />
            </div>
            <Input
                label='Long Description'
                value={longDescription}
                multiline
                minLength="10"
                rows={3}
                rowsMax={3}
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
                disabled={steps.length === 1}
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
                        key={i}
                        className={`recipe-instructions__step ${
                            stepNumber === i ? "bold" : ""
                        }`}
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
