import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ===============================================================
//    Отримання рецепта за ID
// ===============================================================
export const fetchRecipeById = createAsyncThunk(
  "recipes/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/recipes/${id}`
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Server error");
    }
  }
);

// ===============================================================
// Yaroslav: Save / Unsave Recipe
// ===============================================================

export const saveRecipe = createAsyncThunk(
  "recipes/save",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/recipes/${id}/favorite`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Server error");
    }
  }
);

export const unsaveRecipe = createAsyncThunk(
  "recipes/unsave",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/recipes/${id}/favorite`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Server error");
    }
  }
);

// ===============================================================
// Yaroslav (END): Save / Unsave Recipe
// ===============================================================

const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    recipe: null,
    loading: false,
    error: null,
    saved: false,
  },
  reducers: {
    clearRecipe(state) {
      state.recipe = null;
      state.error = null;
      state.saved = false;
    },
  },
  extraReducers: (builder) => {
    // --- спільне ---
    builder
      .addCase(fetchRecipeById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipeById.fulfilled, (state, action) => {
        state.loading = false;
        state.recipe = action.payload;

        // ===============================================================
        // Yaroslav (START): якщо бекенд віддає isFavorite
        // ===============================================================
        state.saved = action.payload?.isFavorite || false;
        // Yaroslav (END): якщо бекенд віддає isFavorite
        // ===============================================================
      })
      .addCase(fetchRecipeById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // ===============================================================
    // Yaroslav (START): логіка Save / Unsave
    // ===============================================================
    builder
      .addCase(saveRecipe.fulfilled, (state) => {
        state.saved = true;
      })
      .addCase(unsaveRecipe.fulfilled, (state) => {
        state.saved = false;
      });
    // Yaroslav(END): логіка Save / Unsave
    // ===============================================================
  },
});

export const { clearRecipe } = recipesSlice.actions;
export default recipesSlice.reducer;


