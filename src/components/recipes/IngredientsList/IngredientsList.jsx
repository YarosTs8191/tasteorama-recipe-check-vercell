import styles from "./IngredientsList.module.css";

export default function IngredientsList({ ingredients }) {
  if (!ingredients || ingredients.length === 0) {
    return <p className={styles.empty}>No ingredients available</p>;
  }

  return (
    <ul className={styles.list}>
      {ingredients.map((item, index) => (
        <li key={index} className={styles.item}>
          {item}
        </li>
      ))}
    </ul>
  );
}
