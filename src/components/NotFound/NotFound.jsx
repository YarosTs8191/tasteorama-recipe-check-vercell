import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.css";

// todo: Імпортувати картинку ( src/assets/images/notfound.png)
//import notFoundImg from "../../assets/images/notfound.png";

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      {/* <img src={notFoundImg} alt="Not found" className={styles.image} /> */}
      <h1 className={styles.title}>404</h1>
      <p className={styles.text}>Recipe not found</p>
      <button className={styles.button} onClick={handleBackHome}>
        Back to Home
      </button>
    </div>
  );
};

export default NotFound;
