import React from 'react';
import img2 from '../assets/img2.png';

const Header = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="row">
            <div className="h-leftcolumn">
              <img src={img2} alt="" />
            </div>
            <div className="h-rightcolumn">
              <h1>Rafif Yusuf Avandy</h1>
              <hr className="style1" />
              <p className="style1">Mahasiswa Aktif Telkom University</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
