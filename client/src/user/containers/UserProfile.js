import React from "react";
import "./UserProfile.css"
import ProfileInfo from "../components/profile/ProfileInfo";

const UserProfile = props => {
    return (
        <div class="row">
            <div class="profile-info-column left">
                <ProfileInfo />
            </div>
            <div class="profile-recipe-column right">
                <h2>4 tabs - all, original, remix, attempts</h2>
                <h3>RecipeList associate with them</h3>
            </div>   
        </div>  
    );
}

export default UserProfile;