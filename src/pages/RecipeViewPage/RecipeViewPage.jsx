import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipeById, clearRecipe } from "../../redux/recipes";
import RecipeDetails from "../../components/RecipeDetails";
import NotFound from "../../components/NotFound";
import styles from "./RecipeViewPage.module.css";

export default function RecipeViewPage() {
  // Отримуємо ID рецепта з URL (/recipes/:id)
  const { recipeId } = useParams();
  const dispatch = useDispatch();

  // Витягуємо дані зі store
  const { recipe, loading, error } = useSelector((state) => state.recipes);

  // Коли сторінка завантажується – робимо запит
  useEffect(() => {
    if (recipeId) {
      dispatch(fetchRecipeById(id));
    }

    // При виході зі сторінки – очищаємо state
    return () => {
      dispatch(clearRecipe());
    };
  }, [dispatch, recipeId]);

  // Стан завантаження
  if (loading) {
    return <p className={styles.loading}>Loading recipe...</p>;
  }

  // Якщо сталася помилка або бекенд повернув 404
  if (error) {
    return <NotFound />;
  }

  // Якщо рецепт ще не підвантажився
  if (!recipe) {
    return null;
  }

  // Якщо все ок – показуємо деталі рецепта
  return (
    <div className={styles.page}>
      <RecipeDetails recipe={recipe} />
    </div>
  );
}
