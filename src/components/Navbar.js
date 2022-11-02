import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav
        class="navbar is-primary"
        role="navigation"
        aria-label="main navigation"
      >
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a href="http://localhost:3000/" class="navbar-item">
              Home
            </a>

            <a href="http://localhost:3000/user" class="navbar-item">
              User
            </a>
            <a href="http://localhost:3000/product" class="navbar-item">
              Product
            </a>
            <a href="http://localhost:3000/kegiatan" class="navbar-item">
              Kegiatan
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
