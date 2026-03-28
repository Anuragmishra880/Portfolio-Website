import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const closeMenu = () => {
    const navbar = document.getElementById("navbarNavAltMarkup");
    const closeNavbar = window.bootstrap.Collapse.getInstance(navbar);
    if (closeNavbar) {
      closeNavbar.hide();
    }
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg  bg-black navbar-dark fixed-top"
        onClick={closeMenu}
      >
        <div className="container-fluid px-lg-5 px-2">
          {/* <!-- ✅ Logo LEFT --> */}
          <NavLink className="navbar-brand fw-bold fs-3 " to="/">
            Anurag
          </NavLink>

          {/* <!-- Toggle --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* <!-- Links RIGHT --> */}
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto gap-3 me-3 ">
              <NavLink end className="nav nav-link " to="/" onClick={closeMenu}>
                Home
              </NavLink>
              <NavLink className="nav nav-link" to="/about" onClick={closeMenu}>
                About
              </NavLink>
              <NavLink
                className="nav nav-link"
                to="/project"
                onClick={closeMenu}
              >
                Project
              </NavLink>
              <NavLink
                className="nav nav-link"
                to="/skills"
                onClick={closeMenu}
              >
                Skills
              </NavLink>
              <NavLink
                className="nav nav-link"
                to="/contact"
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
