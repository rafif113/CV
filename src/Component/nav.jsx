import React from 'react';
import '../assets/Nav.css';
import { Link } from 'react-router-dom';
import Menu from '../assets/menu.png';
import Home from '../assets/home.png';
import Portofolio from '../assets/portfolio.png';

const Nav = () => {
  const listMenu = [
    { path: 'Profil', img: Home },
    { path: 'Portofolio', img: Portofolio },
  ];
  return (
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
  );
};
export default Nav;
