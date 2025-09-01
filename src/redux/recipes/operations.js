import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axiosInstance";
import { getAllIngredientsAPI } from '../../api/ingredients.js';


export const fetchRecipes = createAsyncThunk(
  'recipes/fetchRecipes',
  async (
    { category, ingredient, search, page = 1, perPage = 12 },
    thunkAPI
  ) => {
    try {
      const params = new URLSearchParams();
      if (category) {
        params.append('category', category);
      }
      if (ingredient) {
        params.append('ingredient', ingredient);
      }
      if (search) {
        params.append('search', search);
      }
      params.append('page', page);
      params.append('perPage', perPage);
      const response = await axios.get(`/recipes?${params.toString()}`);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAllIngredients = createAsyncThunk(
  'recipe/fetchAllIngredients',
  async (_, thunkAPI) => {
    try {
      const res = await getAllIngredientsAPI();
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
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
