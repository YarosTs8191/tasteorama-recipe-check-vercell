// src/redux/redux.jsx
import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./recipes";

const store = configureStore({
  reducer: {
    recipes: recipesReducer,
  },
});

export default store;
