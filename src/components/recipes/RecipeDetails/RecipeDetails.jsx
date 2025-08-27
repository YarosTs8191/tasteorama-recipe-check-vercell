import styles from "./RecipeDetails.module.css";
import IngredientsList from "../IngredientsList/IngredientsList";
import StepsList from "../StepsList/StepsList";

export default function RecipeDetails({ recipe }) {
  if (!recipe) return null; // захист від пустих даних

  return (
    <div className={styles.wrapper}>
      {/* Заголовок */}
      <h1 className={styles.title}>{recipe.title}</h1>

      {/* Зображення страви */}
      <div className={styles.imageWrapper}>
        <img src={recipe.image} alt={recipe.title} className={styles.image} />
      </div>

      {/* Загальна інформація */}
      <section className={styles.infoBox}>
        <h2 className={styles.subtitle}>General informations</h2>
        <p>
          <b>Category:</b> {recipe.category}
        </p>
        <p>
          <b>Cooking time:</b> {recipe.cookingTime}
        </p>
        <p>
          <b>Calories:</b> {recipe.calories}
        </p>

        {/* TODO: кнопка Save/Unsave (буде окремим компонентом від іншого члена команди) */}
        <button className={styles.saveBtn}>Save</button>
      </section>

      {/* Опис */}
      <section>
        <h2 className={styles.subtitle}>About recipe</h2>
        <p>{recipe.description}</p>
      </section>

      {/* Інгредієнти */}
      <section>
        <h2 className={styles.subtitle}>Ingredients</h2>
        <IngredientsList ingredients={recipe.ingredients} />
      </section>

      {/* Кроки приготування */}
      <section>
        <h2 className={styles.subtitle}>Preparation Steps</h2>
        <StepsList steps={recipe.steps} />
      </section>
    </div>
  );
}
