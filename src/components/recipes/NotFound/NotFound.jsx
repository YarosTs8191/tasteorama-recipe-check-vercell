import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    // завантажити картинку з макету в папку ассетс
    <div className={styles.notFound}>
      <img src={notFoundImg} alt="Not found" className={styles.image} />
      <h2 className={styles.title}>Recipe not found</h2>
      <p className={styles.text}>
        The recipe you are looking for does not exist or has been removed.
      </p>
    </div>
  );
}
