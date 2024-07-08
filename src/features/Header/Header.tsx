// import Image from "next/image";
import styles from "./Header.module.scss";

export const Header = () => {
  const isHomepage = true; // TODO: get from context

  return (
    <header className={styles.header} role="banner">
      <div>Header component</div>
      <nav>Navigation Component</nav>
    </header>
  );
};
