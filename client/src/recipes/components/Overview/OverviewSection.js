import React from 'react';
import './OverviewSection.css';
import { Link } from 'react-router-dom';
import Button from '../../../shared/components/FormElements/Button';

const OverviewSection = props => {
    return (
        <div className="overview-section">
            <h1>{props.recipeName}</h1>
            {props.cuisine.map(c => (
                // <button className="cuisine-button">
                //     {c}
                // </button>
                <Button className="cuisine-button" variant="contained">
                    {c}
                </Button>
            ))}
            <div className="recipe-profile-link">
                <Link to={`/chefs/${props.authorId}/`}>
                    {props.author}
                </Link>
                <p>number of user points</p>
            </div>
            <p>likes: {props.likes}</p>
            <p>saved: {props.saved}</p>
            <img className="recipe-overview-image" src={props.image} alt={props.image} />
        </div>
        
    );
}

export default OverviewSection;