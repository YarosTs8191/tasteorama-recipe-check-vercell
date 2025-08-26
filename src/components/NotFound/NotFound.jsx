import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <div className="notfound-container">
      <h1 className="notfound-title">Сторінка не знайдена</h1>
      <p className="notfound-text">
        Вибачте, але сторінка, яку ви шукаєте, не існує або сталася помилка.
      </p>
      <button  onClick={handleBackHome}>
        Повернутися на головну
      </button>
    </div>
  );
};

export default NotFound;
