import React from "react";
import { NavLink } from "react-router-dom/";

function Header() {
  return (
    <header>
      <div>
        <h2>FRIENDS DATABASE</h2>
      </div>
      <div>
        <nav>
          <ul className="nav-bar-header">
            <li>
              <NavLink to={"/"}> LOGIN</NavLink>
            </li>
            <li>
              <NavLink to={"/friends"}> FRIENDSLIST</NavLink>
            </li>
            <li>
              <NavLink to={"/friends/add"}> ADDFRIEND</NavLink>
            </li>
            <li>
              <a href="/">LOGOUT</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
