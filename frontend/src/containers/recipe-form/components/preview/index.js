import React from "react";
import View from "./style";

import Button from "../../../../components/button";

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
    submit,
}) => (
    <View>
        <div className='preview__wrapper'>
            <h2>{title}</h2>
            {image ? (
                <img
                    alt='ingredient preview'
                    className='preview__image-preview'
                    src={image}
                />
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
                {equipment.map((eq) => (
                    <ul key={eq}>
                        <li>{eq}</li>
                    </ul>
                ))}
            </PreviewSection>
            <PreviewSection header='Ingredients'>
                {ingredients.map((ingredientObject) => {
                    const { ingredient, quantity, units } = ingredientObject;
                    return (
                        <ul
                            key={ingredient}
                            className='preview__ingredient-container'
                        >
                            <li>{ingredient}</li>
                            <div className='preview__quantity'>
                                <li>{quantity} {units}</li>
                            </div>
                        </ul>
                    );
                })}
            </PreviewSection>
            <PreviewSection header='Steps'>
                {steps.map((step) => {
                    const { shortDescription, image } = step;
                    return (
                        <div key={shortDescription} className='preview__steps'>
                            <span>{shortDescription}</span>
                            <div>
                                {image && (
                                    <img
                                        className='preview__image'
                                        alt='preview-step'
                                        src={image}
                                    ></img>
                                )}
                            </div>
                        </div>
                    );
                })}
            </PreviewSection>
        </div>
        <Button variant='contained' color='primary' onClick={submit}>
            Submit
        </Button>
    </View>
);

export default Preview;
