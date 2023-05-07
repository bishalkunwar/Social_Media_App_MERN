// Reducers are functions that take the current state and an action as arguments, and return a new state result

import { combineReducers } from "redux";

import Posts from "./posts";

export const reducers = combineReducers({Posts});