import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories, fetchIngredients } from "./operations";
import { notifyError } from "../utils/notifications";

const initialState = {
  categories: [],
  ingredients: [],
  loading: false,
  error: null,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // categories
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch categories";
        notifyError(state.error);
      })

      // ingredients
      .addCase(fetchIngredients.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.loading = false;
        state.ingredients = action.payload;
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch ingredients";
        notifyError(state.error);
      });
  },
});

export default filtersSlice.reducer;
