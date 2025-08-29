import { createSlice } from "@reduxjs/toolkit";
import { fetchRecipes, fetchRecipeById } from "./recipesThunks";
import { notifyError } from '../utils/notifications.js';

const initialState = {
  items: [],
  currentRecipe: null,
  loading: false,
  error: null,
  page: 1,
  perPage: 10,
  totalPages: 1,
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    clearCurrentRecipe(state) {
      state.currentRecipe = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetch all recipes
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.data || action.payload; // залежить від бекенду
        // Якщо є пагінація — розпарси:
        if (action.payload.page) {
          state.page = action.payload.page;
          state.perPage = action.payload.perPage;
          state.totalPages = action.payload.totalPages;
        }
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        notifyError(action.payload);
      })

      // fetch recipe by id
      .addCase(fetchRecipeById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipeById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentRecipe = action.payload;
      })
      .addCase(fetchRecipeById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        notifyError(action.payload);
      });
  },
});

export const { clearCurrentRecipe } = recipesSlice.actions;
export default recipesSlice.reducer;
