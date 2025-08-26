import { Link } from "react-router-dom";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import css from "./RecipeCard.module.css";

export default function RecipeCard({ recipe }) {
  return (
    <div className={css.recipeCard}>
      <img
        src={recipe.thumb}
        alt={recipe.title}
        className={css.recipeImage}
      />
      <div className="css.head">
        <h3 className={css.recipeTitle}>{recipe.title}</h3>

        <div className={css.cookTime}>
          <svg className={css.timeIcon} width="24" height="24">
            <use href="#icon-clock"></use>
          </svg>
          <span className="timeText">{recipe.time}</span>
        </div>
      </div>

      <p className={css.recipeDescription}>{recipe.description}</p>
      <p className={css.recipeCalories}>~{recipe.cals} kcal</p>
      <div className={css.foot}>
        <Link to={`/recipes/${recipe._id}`} className={css.viewRecipeButton}>
          Learn More
        </Link>

        <FavoriteButton
          recipeId={recipe._id}
        /></div>
    </div>
  );
}
