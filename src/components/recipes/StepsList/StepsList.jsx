import styles from "./StepsList.module.css";

export default function StepsList({ steps }) {
  if (!steps || steps.length === 0) {
    return <p className={styles.empty}>No preparation steps available</p>;
  }

  return (
    <ol className={styles.list}>
      {steps.map((step, index) => (
        <li key={index} className={styles.item}>
          {step}
        </li>
      ))}
    </ol>
  );
}
