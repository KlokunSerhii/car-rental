import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Welcome.module.css";
function Welcome() {
  return (
    <section className={styles.BackgroundWelcome}>
      <NavLink to={"/catalog"} className={styles.BtnCatalog}>
        Catalog
      </NavLink>

      <NavLink to={"/favorites"} className={styles.BtnFavorites}>
        Favorites
      </NavLink>
    </section>
  );
}

export default Welcome;
