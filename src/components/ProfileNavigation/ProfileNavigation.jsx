import { NavLink } from "react-router-dom";
import s from "./ProfileNavigation.module.css";

export default function ProfileNavigation() {
  return (
    <div className={s.container}>
      <h2 className={s.title}>My Profile</h2>
      <nav className={s.nav}>
        <NavLink
          to="/profile/own"
          className={({ isActive }) =>
            isActive ? `${s.link} ${s.active}` : s.link
          }
        >
          My Recipes
        </NavLink>
        <NavLink
          to="/profile/favorites"
          className={({ isActive }) =>
            isActive ? `${s.link} ${s.active}` : s.link
          }
        >
          Saved Recipes
        </NavLink>
      </nav>
    </div>
  );
}
