import React from 'react';
import OverviewImages from './OverviewImages';
import './OverviewSection.css';

const OverviewSection = props => {
    return (
        <div className="overview-section">
            <h1>RecipeName</h1>
            <h4>author</h4>
            <p>number of likes</p>
            <OverviewImages />
        </div>
        
    );
}

export default OverviewSection;