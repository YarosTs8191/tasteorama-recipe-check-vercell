// src/redux/recipes/recipesSelectors.js

export const selectRecipes = (state) => state.recipes.items;

export const selectCurrentRecipe = (state) => state.recipes.currentRecipe;

export const selectRecipesLoading = (state) => state.recipes.loading;

export const selectRecipesError = (state) => state.recipes.error;

export const selectRecipesPage = (state) => state.recipes.page;

export const selectRecipesPerPage = (state) => state.recipes.perPage;

export const selectRecipesTotalPages = (state) => state.recipes.totalPages;

export const selectRecipesPagination = (state) => ({
  page: state.recipes.page,
  perPage: state.recipes.perPage,
  totalPages: state.recipes.totalPages,
});
