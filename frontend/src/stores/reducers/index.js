import { combineReducers } from "redux";

import sessionsReducer from "./sessions-reducer";

export const rootReducer = combineReducers({ sessions: sessionsReducer });
