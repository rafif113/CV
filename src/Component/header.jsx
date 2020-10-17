import React from 'react';
import { Route } from 'react-router-dom';
import img2 from '../assets/img2.png';

const Header = () => {
  const Param = ({ match }) => {
    if (match.params.id === 'Profil' || match.params.id === null) {
      return <p className="style1">Mahasiswa Aktif Telkom University</p>;
    }
    if (match.params.id === 'Portofolio') {
      return <p className="style1">{match.params.id}</p>;
    }
    return <p className="style1" />;
  };
  return (
    <div className="container">
      <div className="header">
        <div className="row">
          <div className="h-leftcolumn">
            <img src={img2} alt="" />
          </div>
          <div className="h-rightcolumn">
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
