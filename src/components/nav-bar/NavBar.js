import React, { useState } from 'react';
import { Link, Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Footer from '../footer/Footer';
import CloseSvg from './close.svg';
import LogoSvg from './logo.svg';
import MenuSvg from './menu.svg';
import './NavBar.scss';

const history = createBrowserHistory();

function NavBar({ children }) {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const closeMenu = () => {
    setIsShowMenu(false);
  };
  
  return (
    <div className="navbar">
      <Router history={history}>
        <div className="nav">
          <Link to="/" onClick={closeMenu}><img className="nav__logo" src={LogoSvg} alt="1 THING I CAN DO TO FIGHT RACISM" /></Link>
          <img className="nav__menu" src={isShowMenu ? CloseSvg : MenuSvg} alt="menu" onClick={() => setIsShowMenu(!isShowMenu)} />
        </div>
        {!isShowMenu && (
          <div className={'content'}>
            {children}
          </div>
        )}
        {isShowMenu && (
          <div className="navbar__directory">
            <Link to="/" className="navbar__directory__link" onClick={closeMenu}><h2>Share 1 thing you did</h2></Link>
            <Link to="/inspirations" className="navbar__directory__link" onClick={closeMenu}><h2>Get inspirations</h2></Link>
            <Link to="/propose" className="navbar__directory__link" onClick={closeMenu}><h2>Propose your idea</h2></Link>
            <Link to="/about" className="navbar__directory__link navbar__directory__link--gap" onClick={closeMenu}><div>About</div></Link>
            <Link to="/?bottom=true" className="navbar__directory__link" onClick={closeMenu}><div>Newsletter</div></Link>
            <Link to="/why-act" className="navbar__directory__link" onClick={closeMenu}><div>Why you should act</div></Link>
          </div>
        )}
        <Footer link="https://www.1-thing.org/" />
      </Router>
    </div>
  );
}

export default NavBar;
