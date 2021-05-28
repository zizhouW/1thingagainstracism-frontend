import React, { useState } from 'react';
import { Link, Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
import LogoSvg from './logo.svg';
import MenuSvg from './menu.svg';
import './NavBar.scss';

const history = createBrowserHistory();

function NavBar({ children }) {
  const [isShowMenu, setIsShowMenu] = useState(false);
  
  return (
    <div className="navbar">
      <Router history={history}>
        <div className="nav">
          <img src={LogoSvg} alt="1 THING I DID TO FIGHT RACISM" />
          <img className="nav__menu" src={MenuSvg} alt="menu" onClick={() => setIsShowMenu(!isShowMenu)} />

          {isShowMenu && (
            <div className="nav__dropdown">
              <Link to="/">Home</Link>
              <Link to="/about">About us</Link>
            </div>
          )}
        </div>
        <div className="content">
          {children}
        </div>
      </Router>
    </div>
  );
}

export default NavBar;
