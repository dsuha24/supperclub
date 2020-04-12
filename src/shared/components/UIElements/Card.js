import React from 'react';
import './Card.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SettingsOverscanIcon from '@material-ui/icons/SettingsOverscan';

export default function Card(props) {

  return (
    <React.Fragment>
      <div class="container">
        <img src={props.image} alt={props.name}/>
        <div class="bottom-left">{props.name}</div>
        <div class="bottom-left-sub">{props.author}</div>
        <div class="top-right"><FavoriteBorderIcon /></div>
        <div class="bottom-right"><SettingsOverscanIcon /></div>
      </div>
    </React.Fragment>
  );
}
