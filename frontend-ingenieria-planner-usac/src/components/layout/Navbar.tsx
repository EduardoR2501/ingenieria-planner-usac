import { NavLink } from "react-router-dom";
import { Sun, Moon, User } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import "./Navbar.css";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="navbar">
      <div className="navbar-container">

        <NavLink to="/" className="navbar-logo">
          Ingeniería Planner USAC
        </NavLink>

        <nav className="navbar-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/pensum">
            Pensum
          </NavLink>
          <NavLink to="/classrooms">
            Salones
          </NavLink>
          <NavLink to="/schedules">
            Horario
          </NavLink>
        </nav>

        <div className="navbar-actions">

          <button className="theme-toggle" aria-label="Cambiar tema" onClick={toggleTheme}>
            {theme === "light" ? <Moon size={30} /> : <Sun size={30} />}
          </button>

          <NavLink to="/profile" className="profile-link" aria-label="Perfil">
            <User size={30} />
          </NavLink>

        </div>

      </div>
    </header>
  );
};

export default Navbar;