import React from 'react';
import OverviewImages from './OverviewImages';
import './OverviewSection.css';
import { Link } from 'react-router-dom';

const OverviewSection = props => {
    return (
        <div className="overview-section">
            <h1>{props.recipeName}</h1>
            <div className="recipe-profile-link">
                <Link to="/uid">
                    Author (clicking will link to profile)
                </Link>
                <p>number of user points</p>
            </div>
            <p>number of likes</p>
            <p>number of interested</p>
            <img src={props.image} />
        </div>
        
    );
}

export default OverviewSection;