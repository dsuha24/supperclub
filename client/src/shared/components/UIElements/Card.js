import React from 'react';
import './Card.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SettingsOverscanIcon from '@material-ui/icons/SettingsOverscan';
// import RecipeModal from '../../../recipes/components/UIElements/RecipeModal';


export default function Card(props) {

  return (
    <React.Fragment>
      <div className="container" onClick={props.onClick}>
        <img className="card-image" src={`http://localhost:5000/${props.image}`} alt={props.name}/>
        {/* <img src={props.image} alt={props.name}/> */}
        <div className="bottom-left">{props.name}</div>
        <div className="bottom-left-sub">{props.author}</div>
        <div className="top-right"><FavoriteBorderIcon /></div>
        <div className="bottom-right"><SettingsOverscanIcon /></div>
      </div>
      {/* <RecipeModal
        onClose={props.handleModalClose}
        open={props.open}
        recipeName={props.name}
        image={props.image}
      /> */}
    </React.Fragment>
  );
}
