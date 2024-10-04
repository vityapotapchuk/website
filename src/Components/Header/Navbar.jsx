import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../HURAGAN_logo.png";
import { Link } from "react-scroll";
import useForm from "../../hooks/useForm.js";

function Navbar() {
  const {isMobile, clickState, setMobile} = useForm()
  
  return (
    <div className="navbar">
        <Link to="main" spy={true} smooth={false} offset={0}>
            <img className="logo-img-nav" src={logo} alt="logo" />
        </Link>
        <nav className={"nav-links"} onClick={() => setMobile("main")}>
          <Link style={{color: clickState === "projects" && "orange" }} to="projects" spy={true} smooth={false} offset={140} onClick={() => setMobile("projects")}>
            <p>Projects</p>
          </Link>
          <Link style={{color: clickState === "about" && "orange" }} to="about" spy={true} smooth={false} offset={0} onClick={() => setMobile("about")}>
            <p>About</p>
          </Link>
          <Link style={{color: clickState === "services" && "orange" }} to="services" spy={true} smooth={false} offset={0} onClick={() => setMobile("services")}>
            <p>Services</p>
          </Link>
          <Link style={{color: clickState === "contacts" && "orange" }} to="contacts" spy={true} smooth={false} offset={0} onClick={() => setMobile("contacts")}>
            <p>Contacts</p>
          </Link>
        </nav>
        <button className="mobile-menu-icon" onClick={() => setMobile("mobile")} >
            {isMobile? <FaTimes/> : <FaBars />}
      </button>
      </div>
   
  );
}

export default Navbar;
