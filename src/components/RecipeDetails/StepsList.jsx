import styles from "./StepsList.module.css";

export default function StepsList({ steps }) {
  if (!steps || steps.length === 0) {
    return <p className={styles.empty}>No preparation steps available</p>;
  }

  // Якщо steps = рядок → перетворюємо на масив
  const stepsArray = Array.isArray(steps) ? steps : steps.split("\n");

  return (
    <ol className={styles.list}>
      {stepsArray.map((step, index) => (
        <li key={index} className={styles.item}>
          {step}
        </li>
      ))}
    </ol>
  );
}
