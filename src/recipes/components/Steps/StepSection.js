import React from 'react';
import "./StepSection.css";

const StepSection = props => {
    return (
        <div className="step-section">
            <h1>Step [number]: Description</h1>
            <p>step instructions</p>
            <h2>Step image</h2>
            <h3>Ingredients associated with Step</h3>
            <h3>Equipment associated with Step</h3>
        </div>
    );
}

export default StepSection;