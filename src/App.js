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

const App = () => {
  return (
    <Router>
      <MainNavigation />
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
        <Route path="/users" exact>
          <Users />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
