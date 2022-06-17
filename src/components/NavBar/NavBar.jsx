import NavLink from "../NavLink/NavLink";
import NavLinkChild from "../NavLink/NavLinkChild";
import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navMain}>
      <ul className={styles.navList}>
        <NavLink title="Productos" />
        <NavLink colorStyle="lightblue" title="Servicios" />
        <NavLink colorStyle="green" title="Contacto" />
        <NavLinkChild>
          <p>Login</p>
        </NavLinkChild>
      </ul>
    </nav>
  );
}
