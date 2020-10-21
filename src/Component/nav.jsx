import React from 'react';
import '../assets/Nav.css';
import { Link } from 'react-router-dom';
import { useTheme, useThemeUpdate } from './themeContext';
import Menu from '../assets/menu.png';
import Home from '../assets/home.png';
import Sun from '../assets/sun.png';
import Moon from '../assets/moon.png';
import Portofolio from '../assets/portfolio.png';

const Nav = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const listMenu = [
    { path: 'Profil', img: Home },
    { path: 'Portofolio', img: Portofolio },
  ];

  return (
    <>
      <div className="dropdown">
        <button className="mainmenubtn" type="button">
          <img className="menu" src={Menu} alt="a" />
        </button>
        <div className="dropdown-child">
          {listMenu.map((name) => {
            return (
              <Link to={`/${name.path}`} key={name.path}>
                <img className="menu" src={name.img} alt="" />
              </Link>
            );
          })}
        </div>
      </div>
      <button className="btn-toogle" type="button" onClick={toggleTheme}>
        <img className="toogle" src={darkTheme ? Sun : Moon} alt="" />
      </button>
    </>
  );
};
export default Nav;
