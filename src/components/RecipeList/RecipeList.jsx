import { useSelector } from 'react-redux';
import RecipeCard from '../RecipeCard/RecipeCard.jsx';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn.jsx';

const { recipesData, loading } = useSelector(zaglushka);

export default function RecipeList() {

    if (loading) return <p>Loading...</p>;

    return (
        <div>

            <ul>
                {recipesData.items.map((recipe) => (
                    <li key={recipe._id}>
                        <RecipeCard recipe={recipe} />
                    </li>
                ))}
            </ul>
            {!loading && recipesData.hasNextPage && <LoadMoreBtn />}
        </div>
    
    );
};
