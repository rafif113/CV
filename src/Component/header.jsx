import React from 'react';
import { Route } from 'react-router-dom';
import img2 from '../assets/img2.png';
import { useTheme } from '../Config/themeContext';

const Header = () => {
  const darkTheme = useTheme();
  const themeClass = darkTheme ? 'container-dark' : 'container';
  const themeClassHeader = darkTheme ? 'h-rightcolumn-dark' : 'h-rightcolumn';
  const textStyle = darkTheme ? 'style1-dark' : 'style1';

  const Param = ({ match }) => {
    if (match.params.id === 'Profil' || match.params.id === null) {
      return <p className={textStyle}>Mahasiswa Aktif Telkom University</p>;
    }
    if (match.params.id === 'Portofolio') {
      return <p className={textStyle}>{match.params.id}</p>;
    }
    return <p className={textStyle} />;
  };

  return (
    <div className={themeClass}>
      <div className="header">
        <div className="row">
          <div className="h-leftcolumn">
            <img src={img2} alt="" />
          </div>
          <div className={themeClassHeader}>
            <h1>Rafif Yusuf Avandy</h1>
            <hr className="style1" />
            {Param}
            <Route path="/:id" component={Param} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
