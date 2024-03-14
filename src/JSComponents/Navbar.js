// Navbar.js


import { Link } from 'react-scroll';
import '../CSSComponents/Navbar.css';

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          Skills
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
        

      </div>
    </div>
  );
};

export default Navbar;
