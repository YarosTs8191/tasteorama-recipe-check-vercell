import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "../LogoutButton/LogoutButton";
import styles from "./Header.module.css"; // твій CSS модуль

const Header = () => {
  const { user, isLoggedIn } = useSelector((state) => state.auth);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <NavLink to="/">Tasteorama</NavLink>
      </div>

      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Рецепти
        </NavLink>

        {isLoggedIn ? (
          <>
            <NavLink
              to="/profile/own"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Мій профіль
            </NavLink>
            <NavLink
              to="/add-recipe"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Додати рецепт
            </NavLink>

            <div className={styles.userInfo}>
              <div className={styles.avatar}>
                {user?.name ? user.name[0].toUpperCase() : "U"}
              </div>
              <span className={styles.userName}>{user?.name || "User"}</span>
              <LogoutButton />
            </div>
          </>
        ) : (
          <>
            <NavLink
              to="/auth/login"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Увійти
            </NavLink>
            <NavLink
              to="/auth/register"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Зареєструватися
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
