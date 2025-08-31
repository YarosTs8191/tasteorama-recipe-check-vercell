import styles from "./RecipeDetails.module.css";
import IngredientsList from "./IngredientsList";
import StepsList from "./StepsList";

export default function RecipeDetails({ recipe }) {
  if (!recipe) return null; // захист від пустих даних

  return (
    <div className={styles.wrapper}>
      <div className={styles.blockwrapper}>
        {/* Заголовок */}
        <h1 className={styles.title}>{recipe.title}</h1>

        {/* Зображення страви */}
        <div className={styles.imageWrapper}>
          <img src={recipe.image} alt={recipe.title} className={styles.image} />
        </div>
      </div>
      <div className={styles.desctopinfo}>
        {/* Загальна інформація */}
        <div className={styles.metaRow}>
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
          </section>
          {/* TODO: кнопка Save/Unsave (буде окремим компонентом від іншого члена команди) */}
          <button className={styles.saveBtn}>Save</button>
        </div>

        {/* Опис */}
        <div className={styles.infocomtainer}>
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
      </div>
    </div>
  );
}
