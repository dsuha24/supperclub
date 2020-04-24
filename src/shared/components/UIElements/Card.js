import React from 'react';
import './Card.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SettingsOverscanIcon from '@material-ui/icons/SettingsOverscan';
// import RecipeModal from '../../../recipes/components/UIElements/RecipeModal';


export default function Card(props) {

  return (
    <React.Fragment>
      <div class="container" onClick={props.onClick}>
        <img src={props.image} alt={props.name}/>
        <div class="bottom-left">{props.name}</div>
        <div class="bottom-left-sub">{props.author}</div>
        <div class="top-right"><FavoriteBorderIcon /></div>
        <div class="bottom-right"><SettingsOverscanIcon /></div>
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
