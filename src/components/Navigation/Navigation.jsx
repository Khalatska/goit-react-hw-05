import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  const activeLink = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <div>
      <nav>
        <NavLink to="/" className={activeLink}>
          Home
        </NavLink>
        <NavLink to="/movies" className={activeLink}>
          Movies
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
