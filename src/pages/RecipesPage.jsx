import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchRecipes,
  resetList,
  selectRecipes,
  selectPage,
  selectIsLoading,
  selectHasMore,
} from '../features/recipes/recipesSlice';
import LoadMoreBtn from '../components/LoadMoreBtn/LoadMoreBtn';
import '../components/LoadMoreBtn/LoadMoreBtn.css';

function RecipeCard({ recipe }) {
  return (
    <article>
      <h3>{recipe.title}</h3>
      {recipe.description && <p>{recipe.description}</p>}
    </article>
  );
}

export default function RecipesPage({ query = '', category = '' }) {
  const dispatch = useDispatch();
  const items = useSelector(selectRecipes);
  const page = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);
  const hasMore = useSelector(selectHasMore);
  const limit = 12;

  // коли змінюються фільтри/пошук — скидаємо на першу сторінку
  useEffect(() => {
    dispatch(resetList());
    dispatch(fetchRecipes({ page: 1, limit, query, category }));
  }, [dispatch, query, category]);

  const handleLoadMore = () => {
    if (!hasMore || isLoading) return;
    dispatch(fetchRecipes({ page: page + 1, limit, query, category }));
  };

  return (
    <main>
      <h2>Recipes</h2>

      {items.length === 0 && !isLoading && <p>No recipes found</p>}

      <ul>
        {items.map(r => (
          <li key={r._id}><RecipeCard recipe={r} /></li>
        ))}
      </ul>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <LoadMoreBtn
          onClick={handleLoadMore}
          hidden={!hasMore}
          disabled={!hasMore}
          isLoading={isLoading}
        />
      </div>
    </main>
  );
}
