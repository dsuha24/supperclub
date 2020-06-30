import React from "react";
import "./UserProfile.css";
import ProfileInfo from "../components/profile/ProfileInfo";
import RecipeList from "../../recipes/components/RecipeList";
import FilterBar from "../../navigation/Filters/FilterBar";

const UserProfile = (props) => {
    const [filterArray, handleFilter] = React.useState([]);

    const filteredRecipes = props.USERS.recipes.filter((item) => {
        // return item.cuisine.toLowerCase().includes(cuisineList.toLowerCase())
        if (filterArray.length === 0) {
            return item;
        }
        return filterArray.includes(item.cuisine);
    });

    // handling the modal================================================
    const [open, toggleModal] = React.useState(false);

    const handleModalOpen = () => {
        toggleModal(true);
    };

    const handleModalClose = () => {
        toggleModal(false);
    };
    //====================================================================

    return (
        <div class='user-profile-container'>
            <div class='profile-info-column left'>
                <ProfileInfo USERS={props.USERS} />
            </div>
            <div class='profile-recipes-column right'>
                <FilterBar handleFilter={handleFilter} />
                <br />
                <h1>My Cookbook</h1>
                <RecipeList
                    // items={props.RECIPES}
                    // items={props.USERS.recipes}
                    items={filteredRecipes}
                    onItemclick={handleModalOpen}
                    open={open}
                    handleModalClose={handleModalClose}
                />
            </div>
        </div>
    );
};

export default UserProfile;
