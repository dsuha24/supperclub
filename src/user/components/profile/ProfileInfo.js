import React from "react";
import Button from '@material-ui/core/Button';

const ProfileInfo = props => {
    return (
        <div>
            <h2>username</h2>
            <h2>image</h2>
            <h2>Name</h2>
            <p>descriptions</p>
            <p>location</p>
            <Button variant="outlined" size="medium" color="primary">
                Follow
            </Button>
            <p>[number] of followers</p>
            <p>[number] of points</p>
        </div>
    );
}

export default ProfileInfo;