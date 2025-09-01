import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axiosInstance";

export const fetchCategories = createAsyncThunk(
  'filters/fetchCategories',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    if (state.filters.categories && state.filters.categories.length > 0) {
      return state.filters.categories;
    }
    try {
      const response = await axios.get('/categories');
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchIngredients = createAsyncThunk(
  'filters/fetchIngredients',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    if (state.filters.ingredients && state.filters.ingredients.length > 0) {
      return state.filters.ingredients;
    }
    try {
      const response = await axios.get('/ingredients');
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
