import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar';
// import Card from '../../shared/components/UIElements/Card';
import './UserItem.css';
import UserCard from '../../shared/components/UIElements/UserCard';

const UserItem = props => {
  return (
    <li className="user-item">
      <UserCard className="user-item__content">
        <Link to={`/chefs/${props.id}/`}>
          <div className="user-item__image">
            <Avatar image={process.env.REACT_APP_ASSET_URL + `${props.image}`} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              14.6k points
              {/* {props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'} */}
            </h3>
          </div>
        </Link>
      </UserCard>
    </li>
  );
};

export default UserItem;
