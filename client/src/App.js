import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

//import Users from './user/pages/Users';
import Recipes from './recipes/containers/Recipes';
import MainNavigation from './layout/navigation/MainNavigation';
import RecipeInstructions from './recipes/containers/RecipeInstructions';
import UserProfile from './user/containers/UserProfile';
import Users from './user/containers/Users';

import "./App.css"
import NewRecipe from './recipes/containers/NewRecipe';
import Auth from './shared/components/Auth';

const App = () => {
  return (
    <div className="main-router">
      <Router>
        <MainNavigation />
        <div className="main-contents">
          <Switch>
            <Route path="/" exact>
              <Recipes />
            </Route>
            <Route path="/recipeinstruction" exact>
              <RecipeInstructions />
            </Route>
            <Route path="/uid" exact>
              <UserProfile />
            </Route>
            <Route path="/newrecipe" exact>
              <NewRecipe />
            </Route>
            <Route path="/users" exact>
              <Users />
            </Route>
            <Route path="/login" exact>
              <Auth />
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
