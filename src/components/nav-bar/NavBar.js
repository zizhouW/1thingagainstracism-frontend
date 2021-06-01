import React, { useState } from 'react';
import { Link, Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
import CloseSvg from './close.svg';
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
          <Link to="/"><img className="nav__logo" src={LogoSvg} alt="1 THING I DID TO FIGHT RACISM" /></Link>
          <img className="nav__menu" src={isShowMenu ? CloseSvg : MenuSvg} alt="menu" onClick={() => setIsShowMenu(!isShowMenu)} />
        </div>
        <div className="content">
          {children}
        </div>
        {isShowMenu && (
          <div className="navbar__directory">
            <Link to="/" className="navbar__directory__link" onClick={() => setIsShowMenu(false)}><h2>What people have done?</h2></Link>
            <Link to="/" className="navbar__directory__link" onClick={() => setIsShowMenu(false)}><h2>How can I help?</h2></Link>
            <Link to="/" className="navbar__directory__link" onClick={() => setIsShowMenu(false)}><h2>Why I should act?</h2></Link>
            <Link to="/" className="navbar__directory__link" onClick={() => setIsShowMenu(false)}><h2>Propose your idea</h2></Link>
            <Link to="/" className="navbar__directory__link" onClick={() => setIsShowMenu(false)}><h2>Share 1 Thing You Did</h2></Link>
            <Link to="/about" className="navbar__directory__link" onClick={() => setIsShowMenu(false)}><div>About</div></Link>
            <Link to="/about" className="navbar__directory__link" onClick={() => setIsShowMenu(false)}><div>Newsletter</div></Link>
          </div>
        )}
        <div>footer</div>
      </Router>
    </div>
  );
}

export default NavBar;
