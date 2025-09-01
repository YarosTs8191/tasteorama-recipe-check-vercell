// src/redux/recipes/recipesThunks.js

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axiosInstance";

// =======================
// FETCH ALL RECIPES
// =======================
export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async (params, { rejectWithValue }) => {
    // params: { category, ingredient, search, page, limit }
    try {
      const query = new URLSearchParams(params).toString();
      const response = await axios.get(`/recipes?${query}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Fetch recipes failed");
    }
  }
);

// =======================
// FETCH RECIPE BY ID
// =======================
export const fetchRecipeById = createAsyncThunk(
  "recipes/fetchRecipeById",
  async (recipeId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/recipes/${recipeId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Fetch recipe failed");
    }
  }
);

// =======================
// CREATE NEW RECIPE
// =======================
export const createRecipe = createAsyncThunk(
  "recipes/createRecipe",
  async (newRecipeData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/recipes", newRecipeData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Create recipe failed");
    }
  }
);

// =======================
// UPDATE FAVORITE STATUS
// =======================
export const updateFavorite = createAsyncThunk(
  "recipes/updateFavorite",
  async ({ recipeId, isFavorite }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/recipes/${recipeId}/favorite`, {
        isFavorite,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Update favorite failed");
    }
  }
);

// =======================
// FETCH FAVORITE RECIPES
// =======================
export const fetchFavoriteRecipes = createAsyncThunk(
  "recipes/fetchFavoriteRecipes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/recipes/favorite");
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Fetch favorite recipes failed"
      );
    }
  }
);
