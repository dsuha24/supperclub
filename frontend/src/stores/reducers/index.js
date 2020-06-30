import { combineReducers } from "redux";

import sessionsReducer from "./sessions-reducer";
import recipesReducer from "./recipes-reducer";

export const rootReducer = combineReducers({
    sessions: sessionsReducer,
    recipes: recipesReducer,
});
