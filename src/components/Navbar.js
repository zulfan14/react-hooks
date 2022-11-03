import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar is-primary"
        role="navigation"
        aria-label="main navigation"
      >
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a href="http://localhost:3000/" className="navbar-item">
              Home
            </a>

            <a href="http://localhost:3000/user" className="navbar-item">
              User
            </a>
            <a href="http://localhost:3000/product" className="navbar-item">
              Product
            </a>
            <a href="http://localhost:3000/kegiatan" className="navbar-item">
              Kegiatan
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
