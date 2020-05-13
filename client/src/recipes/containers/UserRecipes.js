import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';
import RecipeList from '../components/RecipeList';

const UserRecipes = () => {
  const [loadedRecipes, setLoadedRecipes] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedUsers, setLoadedUsers] = useState();

  const userId = useParams().userId;

  // //get user info by id
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const responseData = await sendRequest(
  //         `http://localhost:5000/api/users/${userId}`
  //       );

  //       setLoadedUsers(responseData.user);
  //     } catch (err) {}
  //   };
  //   fetchUsers();
  //   console.log("loadedUser", loadedUsers);
  // }, [sendRequest]);

  //get recipes by id
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/recipes/user/${userId}`
        );
        setLoadedRecipes(responseData.recipes);
      } catch (err) {}
    };
    fetchRecipes();
  }, [sendRequest, userId]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedRecipes && <RecipeList items={loadedRecipes} />}
      {/* <h1>{loadedUsers.}</h1> */}
    </React.Fragment>
  );
};

export default UserRecipes;
