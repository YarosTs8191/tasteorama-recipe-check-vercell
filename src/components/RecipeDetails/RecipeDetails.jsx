import { useDispatch, useSelector } from "react-redux";
import { saveRecipe, unsaveRecipe } from "../../redux/recipes";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import styles from "./RecipeDetails.module.css";
import IngredientsList from "./IngredientsList";
import StepsList from "./StepsList";
import { openModal } from "../../redux/modal/slice";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

export default function RecipeDetails({ recipe }) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const saved = useSelector((state) => state.recipes.saved);

  if (!recipe) return null;

  const handleSaveClick = () => {
    if (!isLoggedIn) {
      dispatch(openModal({ type: "login" }));
      return;
    }

    if (saved) {
      dispatch(unsaveRecipe(recipe._id));
    } else {
      dispatch(saveRecipe(recipe._id));
    }
  };

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

          {/* Save / Unsave */}
          <button onClick={handleSaveClick} className={styles.saveBtn}>
            {saved ? (
              <>
                <FaBookmark className={styles.icon} /> Unsave
              </>
            ) : (
              <>
                <FaRegBookmark className={styles.icon} /> Save
              </>
            )}
          </button>
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
