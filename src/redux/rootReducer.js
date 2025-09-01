import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import recipesReducer from "./recipes/slice";
import filtersReducer from "./filters/slice";
import profileReducer from "./profile/slice";
//import categoriesReducer from './categories/slice';
//import ingredientsReducer from './ingredients/slice';
import modal from './modal/slice';

const rootReducer = combineReducers({
  auth: authReducer,
  recipes: recipesReducer,
  filters: filtersReducer,
  profile: profileReducer,
  //categories: categoriesReducer,
  //ingredients: ingredientsReducer,
  modal
});

export default rootReducer;
