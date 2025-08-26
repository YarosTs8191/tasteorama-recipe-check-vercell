export const selectRecipesItems = ({ recipes }) => recipes?.items || [];
export const selectCurrentRecipes = ({ recipes }) => recipes?.currentRecipe || null;
export const selectRecipesPage = ({ recipes }) => recipes?.page || 1;
export const selectRecipesPerPage = ({ recipes }) => recipes?.perPage || 0;
export const selectRecipesTotalItems = ({ recipes }) => recipes?.totalItems || 0;
export const selectRecipesTotalPages = ({ recipes }) => recipes?.totalPages || 0;

export const selectRecipesIsLoadingAllRecipes = ({ recipes }) =>
  recipes?.isLoadingAllRecipes || false;
export const selectRecipesIsLoadingMoreRecipes = ({ recipes }) =>
  recipes?.isLoadingMoreRecipes || false;
export const selectRecipesIsLoadingCurrentRecipe = ({ recipes }) =>
  recipes?.isLoadingCurrentRecipe || false;
export const selectRecipesIsLoadingFavoriteRecipes = ({ recipes }) =>
  recipes?.isLoadingFavoriteRecipes || false;
export const selectRecipesIsLoadingAddRecipe = ({ recipes }) =>
  recipes?.isLoadingAddRecipe || false;
export const selectRecipesIsLoadingOwnRecipes = ({ recipes }) =>
  recipes?.isLoadingOwnRecipes || false;

export const selectRecipesError = ({ recipes }) => recipes?.error || null;

export const selectRecipeByName = ({ recipes, filters }) => {
  if (!recipes?.items) return [];
  if (!filters?.filterByName) return recipes.items;

  return recipes.items.filter((recipe) =>
    recipe.title.toLowerCase().includes(filters.filterByName.toLowerCase())
  );
};

export const selectRecipesByCategory = ({ recipes, filters }) => {
  if (!recipes?.items) return [];
  if (!filters?.filterByCategory) return recipes.items;

  return recipes.items.filter(
    (recipe) => recipe.category._id === filters.filterByCategory._id
  );
};

export const selectRecipesByIngredients = ({ recipes, filters }) => {
  if (!recipes?.items) return [];
  if (!filters?.filterByIngredients) return recipes.items;

  return recipes.items.filter((el) =>
    el.ingredients.some((ingr) => ingr._id === filters.filterByIngredients._id)
  );
};

export const selectFilteredRecipes = (state) => {
  let filteredRecipes = state.recipes?.items || [];

  if (state.filters?.filterByName) {
    filteredRecipes = selectRecipeByName(state);
  }
  if (state.filters?.filterByCategory) {
    filteredRecipes = selectRecipesByCategory(state);
  }
  if (state.filters?.filterByIngredients) {
    filteredRecipes = selectRecipesByIngredients(state);
  }

  return filteredRecipes;
};
