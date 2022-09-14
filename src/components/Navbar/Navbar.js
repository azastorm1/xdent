import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase/config";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <NavLink to="/" class="navbar-brand">
            <img
              className="logo"
              src="https://x-dent.hr/wp-content/uploads/2021/06/xdent-logo.svg"
              alt=""
            />
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown  "
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink
                  to="/about"
                  id="navlink"
                  class="nav-link"
                  title="О нас"
                  aria-current="page"
                >
                  О нас
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to="/media"
                  class="nav-link"
                  title="Съемки в X-Dent"
                  id="syomki"
                >
                  Съемки в X-Dent
                </NavLink>
              </li>

              <li class="nav-item dropdown">
                <NavLink
                  to="/offices"
                  class="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  title="Офисы  "
                >
                  Офисы
                </NavLink>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <NavLink title="Река" to="/river" id="dropdown-item">
                      Река
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/split" title="Расколость" id="dropdown-item">
                      Расколость
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/zagreb" title="Загреб" id="dropdown-item">
                      Загреб
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <NavLink
                  to="/devices"
                  title="Оборудование"
                  id="navlink"
                  class="nav-link"
                >
                  Оборудование
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to="/news"
                  id="navlink"
                  title="Новости"
                  class="nav-link"
                >
                  Новости
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to="/contact"
                  id="navlink"
                  title="Контакт"
                  class="nav-link"
                >
                  Контакт
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-item
                
                ">
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    onClick={() => auth.signOut()}
                  >
                    Log out
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
