import {Linkedin, Github} from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <span className="footer-title">Ingeniería Planner USAC</span>
          <p className="footer-description">
            Herramienta para planificación académica y gestión de horarios.
          </p>
        </div>

        <div className="footer-socials">
          <a href="https://github.com/EduardoR2501" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={25} />
          </a>
          <a href="https://www.linkedin.com/in/ea2503/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={25} />
          </a>
        </div>


        <span className="footer-copy">
          © {new Date().getFullYear()} Ingeniería Planner USAC
        </span>

      </div>
    </footer>
  );
};

export default Footer;