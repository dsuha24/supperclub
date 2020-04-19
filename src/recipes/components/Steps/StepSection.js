import React from 'react';
import "./StepSection.css";

const StepSection = props => {

    return (
        <div className="step-section">
            {props.items.map(steps => (
                <div>
                    <h1>Step {steps.step}: {steps.shortDescription}</h1>
                    <p>{steps.longDescription}</p>
                    <img src={steps.image} />
                    <h3>Ingredients</h3>
                    <h5>{steps.ingredients}</h5>
                </div>
            ))}
        </div>
    );
}

export default StepSection;