import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Movie Tracker</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/watchlist">Watchlist</Link>
            </li>
            <li>
              <Link to="/watched">Watched</Link>
            </li>
            <li>
              <Link to="/add" className="btn">
                Search
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
