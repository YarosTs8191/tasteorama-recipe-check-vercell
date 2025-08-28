
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import css from './FavoriteButton.module.css';

const FavoriteButton = ({ recipeId }) => {
  
    const dispatch = useDispatch();
    const navigate = useNavigate();

  
    const isAuthenticated = useSelector(zaglushka);
    const favoriteRecipes = useSelector(zaglushka);
  
    const isFavorite = favoriteRecipes?.some(recipe => recipe.id === recipeId);

    const handleAddToFavorites = async () => {
        try {
            const response = await fetch(`zaglushka/favorites/${recipeId}`, {
                method: 'POST',
            });
      
            if (response.ok) {
                dispatch(zaglushka);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleRemoveFromFavorites = async () => {
        try {
            const response = await fetch(`zaglushka/favorites/${recipeId}`, {
                method: 'DELETE',
            });
      
            if (response.ok) {
                dispatch(zaglushka);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleClick = async () => {
        if (!isAuthenticated) {
            // Open login modal
            return;
        }

        if (isFavorite) {
            await handleRemoveFromFavorites();
        } else {
            await handleAddToFavorites();
            navigate(`/recipe/${recipeId}`);
        }
    
    };

    return (
        <button onClick={handleClick} className={css.favoriteButton}>
            <svg className={isFavorite ? css.on : css.off}
                width="24" height="24">
                <use href="#icon-favorite" />
            </svg>
        </button>
    );
}

export default FavoriteButton;