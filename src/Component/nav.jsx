import React from 'react';
import '../assets/Nav.css';
import { Link } from 'react-router-dom';
import menu from '../assets/menu.png';

const Nav = () => {
  const listMenu = ['main', 'portofolio'];
  return (
    <div className="dropdown">
      <button className="mainmenubtn" type="button">
        <img className="menu" src={menu} alt="a" />
      </button>
      <div className="dropdown-child">
        {listMenu.map((name) => {
          return (
            <Link to={`/${name}`} key={name}>
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Nav;
