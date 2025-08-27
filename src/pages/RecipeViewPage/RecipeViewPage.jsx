import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipeById, clearRecipe } from "../../redux/recipes";
<<<<<<< HEAD
import RecipeDetails from "../../components/recipes/RecipeDetails";
import NotFound from "../../components/recipes/NotFound";
=======
import RecipeDetails from "../../components/RecipeDetails";
import NotFound from "../../components/NotFound";
>>>>>>> rescue-work
import styles from "./RecipeViewPage.module.css";

export default function RecipeViewPage() {
  // Отримуємо ID рецепта з URL (/recipes/:id)
<<<<<<< HEAD
  const { id } = useParams();
=======
  const { recipeId } = useParams();
>>>>>>> rescue-work
  const dispatch = useDispatch();

  // Витягуємо дані зі store
  const { recipe, loading, error } = useSelector((state) => state.recipes);

  // Коли сторінка завантажується – робимо запит
  useEffect(() => {
<<<<<<< HEAD
    if (id) {
=======
    if (recipeId) {
>>>>>>> rescue-work
      dispatch(fetchRecipeById(id));
    }

    // При виході зі сторінки – очищаємо state
    return () => {
      dispatch(clearRecipe());
    };
<<<<<<< HEAD
  }, [dispatch, id]);
=======
  }, [dispatch, recipeId]);
>>>>>>> rescue-work

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
<<<<<<< HEAD
      <RecipeDetails recipe={recipe.data} />
=======
      <RecipeDetails recipe={recipe} />
>>>>>>> rescue-work
    </div>
  );
}
