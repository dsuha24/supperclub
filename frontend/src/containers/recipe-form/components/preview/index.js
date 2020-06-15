import React from "react";
import View from "./style";

import PreviewSection from "../preview-section";

const Preview = ({
    formState: {
        title,
        image,
        description,
        cuisine,
        ingredients,
        equipment,
        steps,
    },
}) => (
    <View>
        <h2>{title}</h2>
        {image ? (
            <img className='preview__image-preview' src={image} />
        ) : (
            <div className='preview__image-holder'>Recipe Image</div>
        )}
        <PreviewSection header='Description'>
            <span>{description}</span>
        </PreviewSection>
        <PreviewSection header='Cuisine Type'>
            <span>{cuisine}</span>
        </PreviewSection>
        <PreviewSection header='Equipment'>
            <ul>
                {equipment.map((eq) => (
                    <li key={eq}>{eq}</li>
                ))}
            </ul>
        </PreviewSection>
        <PreviewSection header='Ingredients'>
            {ingredients.map((ingredientObject) => {
                const { ingredient, quantity, units } = ingredientObject;
                return (
                    <ul className='preview__ingredient-container'>
                        <li>{ingredient}</li>
                        <div className='preview__quantity'>
                            <li>{quantity}</li>
                            <li>{units}</li>
                        </div>
                    </ul>
                );
            })}
        </PreviewSection>
        <PreviewSection header='Steps'>
            {steps.map((step) => {
                const {
                    shortDescription,
                    ingredients,
                    equipment,
                    image,
                } = step;
                return (
                    <div className='preview__steps'>
                        <span>{shortDescription}</span>
                        <div>
                            {image && (
                                <img
                                    className='preview__image'
                                    src={image}
                                ></img>
                            )}
                        </div>
                    </div>
                );
            })}
        </PreviewSection>
    </View>
);

export default Preview;
