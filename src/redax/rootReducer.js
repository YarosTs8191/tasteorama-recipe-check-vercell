import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import recipesReducer from "./recipes/recipesSlice";
import filtersReducer from "./filters/filtersSlice";
import profileReducer from "./profile/profileSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  recipes: recipesReducer,
  filters: filtersReducer,
  profile: profileReducer,
});

export default rootReducer;
