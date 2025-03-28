import Logo from "./Logo";
import Nav from "./Nav";
import styles from "styles/Header.module.css";

export default function Header() {
  return (
    <header>
      <div className={styles.flexContainer}>
        <Logo boxOn />
        <Nav />
      </div>
    </header>
  );
}
