import React from 'react';
import './OverviewSection.css';
import { Link } from 'react-router-dom';

const OverviewSection = props => {
    return (
        <div className="overview-section">
            <h1>{props.recipeName}</h1>
            {props.cuisine.map(c => (
                <button>
                    {c.title}
                </button>
            ))}
            <div className="recipe-profile-link">
                <Link to="/uid">
                    Author (clicking will link to profile)
                </Link>
                <p>number of user points</p>
            </div>
            <p>likes: {props.likes}</p>
            <p>saved: {props.saved}</p>
            <img src={props.image} alt={props.image} />
        </div>
        
    );
}

export default OverviewSection;