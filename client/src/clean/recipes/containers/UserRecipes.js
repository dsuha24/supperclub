import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';
import RecipeList from '../components/RecipeList';
import Avatar from '../../shared/components/UIElements/Avatar';
import { Card } from '@material-ui/core';
import Button from '../../shared/components/FormElements/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import RoomIcon from '@material-ui/icons/Room';

import './UserRecipes.css'

const UserRecipes = () => {
  const [loadedRecipes, setLoadedRecipes] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedUser, setLoadedUser] = useState();

  

  const userId = useParams().userId;

  //get user by id
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const responseData = await sendRequest(
          // `http://localhost:5000/api/users/${userId}`
          process.env.REACT_APP_BACKEND_URL + `/users/${userId}`
        );
        setLoadedUser(responseData.users);
        console.log("responseData.users", responseData.users)
      } catch (err) {}
    };
    fetchUser();
  }, [sendRequest, userId]);

  //get recipes by id
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const responseData = await sendRequest(
          // `http://localhost:5000/api/recipes/user/${userId}`
          process.env.REACT_APP_BACKEND_URL + `/recipes/user/${userId}`
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
      {!isLoading && loadedRecipes && loadedUser &&
        <div className="profile-container">
          <div className="profile-info-column">
            <Card>
              <br></br>
              <Avatar 
                // image={`http://localhost:5000/${loadedUser.image}`} 
                image={process.env.REACT_APP_ASSET_URL + `${loadedUser.image}`} 
                alt={loadedUser.name}
                width="125px"
              />
              <h2>{loadedUser.name}</h2>
              <p className="profile-bio">5 beets a day for 3 summers</p>
              <p className="profile-location"><RoomIcon /> Los Angeles, CA</p>
              <Button variant="contained">
                Follow
              </Button>         
              {/* <p>Followers: 1251</p>
              <p>Points: 14.6k</p>
              <p>Recipes: 1</p>
              <p>Citations: 1251</p> */}
              <TableContainer >
                <Table size="small" aria-label="a dense table">
                  <TableBody>
                    <TableRow>
                      <TableCell align="right">Followers</TableCell>
                      <TableCell align="left">1256</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="right">Points</TableCell>
                      <TableCell align="left">14.6k</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="right">Recipes</TableCell>
                      <TableCell align="left">{loadedUser.recipes.length}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="right">Citations</TableCell>
                      <TableCell align="left">452</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <br></br>
              <h2>Awards</h2>
              <div className="awards-list">
                <p>5x Gold Standard</p>
                <p>76x Best New Artist</p>
                <p>42x Fun Guy</p>
              </div>
              {/* <ul>
                <li>5x Gold Standard</li>
                <li>76x Best New Artist</li>
                <li>42x Fun Guy</li>
              </ul> */}
            </Card>
          </div>
          <div className="profile-recipes-column">
            <RecipeList items={loadedRecipes} />
          </div>

        </div>
      }
      {/* <h1>{loadedUsers.}</h1> */}
    </React.Fragment>
  );
};

export default UserRecipes;
