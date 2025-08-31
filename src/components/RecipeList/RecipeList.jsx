import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RecipeCard from '../RecipeCard/RecipeCard.jsx';
import { selectRecipesLoading } from '../../redux/recipes/selectors.js';
import css from './RecipeList.module.css';
import {fetchRecipes} from "../../redux/recipes/operations.js";

export default function RecipeList({ recipes }) {
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

   const loading = useSelector(selectRecipesLoading);

    if (loading) return <Loader/>;

    return (
        <div>
            <p className={css.recipesCount}>{recipesCount}</p>

            <ul className={css.recipeList}>
                {recipes.map((recipe) => (
                    <li key={recipe._id} className={css.recipeListItem}>
                        <RecipeCard recipe={recipe} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
