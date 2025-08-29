import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchRecipesApi } from '../../api/recipes';

export const fetchRecipes = createAsyncThunk(
  'recipes/fetch',
  async ({ page = 1, limit = 12, query, category }, { rejectWithValue }) => {
    try {
      const data = await fetchRecipesApi({ page, limit, query, category });
      return { ...data, page };
    } catch (e) {
      return rejectWithValue(e.message || 'Fetch error');
    }
  }
);

const initialState = {
  items: [],
  page: 1,
  totalPages: 1,
  limit: 12,
  query: '',
  category: '',
  status: 'idle',
  error: null,
};

const slice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setQuery(state, action) {
      state.query = action.payload || '';
    },
    setCategory(state, action) {
      state.category = action.payload || '';
    },
    resetList(state) {
      state.items = [];
      state.page = 1;
      state.totalPages = 1;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (b) => {
    b.addCase(fetchRecipes.pending, (s) => {
      s.status = 'loading';
      s.error = null;
    });
    b.addCase(fetchRecipes.fulfilled, (s, { payload }) => {
      s.status = 'succeeded';
      const { items, totalPages, page } = payload;

      if (page === 1) s.items = items;
      else {
        const seen = new Set(s.items.map(i => i._id));
        s.items.push(...items.filter(i => !seen.has(i._id)));
      }
      s.page = page;
      s.totalPages = totalPages ?? 1;
    });
    b.addCase(fetchRecipes.rejected, (s, { payload }) => {
      s.status = 'failed';
      s.error = payload || 'Unknown error';
    });
  }
});

export const { setQuery, setCategory, resetList } = slice.actions;

export const selectRecipes = (s) => s.recipes.items;
export const selectPage = (s) => s.recipes.page;
export const selectTotalPages = (s) => s.recipes.totalPages;
export const selectIsLoading = (s) => s.recipes.status === 'loading';
export const selectHasMore = (s) => s.recipes.page < s.recipes.totalPages;

export default slice.reducer;
