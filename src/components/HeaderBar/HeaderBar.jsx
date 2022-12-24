import React from "react";
import { NavLink } from "react-router-dom";
import s from "./HeaderBar.module.css";
const HeaderBar = () => {
  return (
    <nav className={s.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Home
      </NavLink>
      <NavLink
        to="/add"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Add contact
      </NavLink>
    </nav>
  );
};

export default HeaderBar;
