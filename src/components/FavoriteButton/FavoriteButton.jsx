
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import css from './FavoriteButton.module.css';
import { fetchAddRecipesToFavorite, fetchDeleteRecipesFromFavorite } from '../../../redux/recipes/operations.js';
import { selectIsLoggedIn } from '../../../redux/auth/selectors.js';
import { openModal } from '../../../redux/modal/slice.js';

const FavoriteButton = ({ recipeId }) => {
  
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isLoggedIn = useSelector(selectIsLoggedIn);
    
    //const favoriteRecipes = useSelector(zaglushka);
  
    const isFavorite = favoriteRecipes?.some(recipe => recipe.id === recipeId);

    const handleAddToFavorites = () => {
        //dispatch(fetchAddRecipesToFavorite(recipeId));
    };

    const handleRemoveFromFavorites = () => {
        //dispatch(fetchDeleteRecipesFromFavorite(recipeId));
    };


    const handleClick =  () => {
        if (!isLoggedIn) {
            dispatch(openModal({ type: 'login' }));
            return;
        }

        if (isFavorite) {
             handleRemoveFromFavorites();
        } else {
             handleAddToFavorites();
             navigate(`/recipe/${recipeId}`);
        }
    
    };

    return (
        <button onClick={handleClick} className={isFavorite ? css.favoriteButtonOn : css.favoriteButtonOff}>
            <svg className={isFavorite ? css.on : css.off}
                width="24" height="24">
                <use href="#icon-favorite" />
            </svg>
        </button>
    );
}

export default FavoriteButton;