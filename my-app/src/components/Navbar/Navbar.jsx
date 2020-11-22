import NavbarClasses from "../Navbar/Navbar.module.css";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className={NavbarClasses.nav}>
      <div className={NavbarClasses.item}>
        <NavLink to="/profile" activeClassName={NavbarClasses.active}>
          Profile{" "}
        </NavLink>
      </div>
      <div className={NavbarClasses.item}>
        <NavLink to="/dialogs" activeClassName={NavbarClasses.active}>
          Dialogs{" "}
        </NavLink>
      </div>
      <div className={NavbarClasses.item}>
        <NavLink to="/news" activeClassName={NavbarClasses.active}>
          News{" "}
        </NavLink>
      </div>
      <div className={NavbarClasses.item}>
        <NavLink to="/music" activeClassName={NavbarClasses.active}>
          Music{" "}
        </NavLink>
      </div>
      <div className={NavbarClasses.item}>
        <NavLink to="/settings" activeClassName={NavbarClasses.active}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
}
