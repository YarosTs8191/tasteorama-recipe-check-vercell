// src/redux/recipes.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// --- Async Thunk для отримання рецепта за ID ---
export const fetchRecipeById = createAsyncThunk(
  "recipes/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/recipes/${id}` // TODO: замінити на реальний бекенд URL
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Server error");
    }
  }
);

const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    recipe: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearRecipe(state) {
      state.recipe = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipeById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipeById.fulfilled, (state, action) => {
        state.loading = false;
        state.recipe = action.payload;
      })
      .addCase(fetchRecipeById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearRecipe } = recipesSlice.actions;
export default recipesSlice.reducer;
