import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axiosInstance";


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

// Можна додати createRecipe, updateFavorite тощо
