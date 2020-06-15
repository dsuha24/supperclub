import React from "react";
import Button from '@material-ui/core/Button';

const ProfileInfo = props => {
    return (
        <div>
            <h2>{props.USERS.username}</h2>
            {/* <img src={props.USERS.profileImage}/> */}
            <h2>{props.USERS.name}</h2>
            <p>{props.USERS.bio}</p>
            <p>{props.USERS.location}</p>
            <Button variant="outlined" size="medium" color="primary">
                Follow
            </Button>
            <p>{props.USERS.numFollowers} followers</p>
            <p>{props.USERS.numPoints} points</p>
        </div>
    );
}

export default ProfileInfo;