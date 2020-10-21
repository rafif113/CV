import React from 'react';
import eclipse from '../assets/eclipse.png';
import eclipse2 from '../assets/eclipse2.png';
import eclipse3 from '../assets/eclipse3.png';
import { useTheme } from '../Config/themeContext';

const Main = () => {
  const darkTheme = useTheme();
  const themeClass = darkTheme ? 'container-dark' : 'container';
  const themeClassEducation = darkTheme ? 'rightcolumn-dark' : 'rightcolumn';

  const circle = [<img src={eclipse} alt="a" />];
  const circle2 = [<img src={eclipse2} alt="b" />];
  const circle3 = [<img src={eclipse3} alt="c" />];

  const profiles = [
    'Nama : Rafif Yusuf Avandy',
    'Tempat,Tanggal Lahir : Bandung, 25 Oktober 2000',
    'Jenis Kelamin : Laki-Laki',
    'Universitas : Telkom University',
    'Prodi : Sistem Informasi',
    'Agama : Islam',
    'Tinggi / Berat badan : 166 / 53',
    'Golongan Darah : O',
  ];
  const studies = [
    'SDN 1 Cijagra Kab.Bandung',
    'SMPN 18 Bandung',
    'SMAN 1 Dayeuhkolot',
    'Telkom University',
  ];
  const abilities = [
    { name: 'Codeigniter', skill: circle3 },
    { name: 'Laravel', skill: circle },
    { name: 'HTML & CSS', skill: circle2 },
    { name: 'Java', skill: circle2 },
    { name: 'Basis Data', skill: circle3 },
  ];

  const listProfile = profiles.map((profile) => {
    return <p>{profile}</p>;
  });
  const listAbility = abilities.map((ability) => {
    return (
      <tr>
        <td>
          <p>{ability.name}</p>
        </td>
        <td>{ability.skill}</td>
      </tr>
    );
  });

  const listStudies = studies.map((study) => {
    return <li>{study}</li>;
  });

  return (
    <div className={themeClass}>
      <div className="row">
        <div className="leftcolumn">
          <h2>Profil</h2>
          {listProfile}
          <br />
          <br />
          <hr className="style2" />
          <br />
          <div className="kemampuan">
            <h2>Kemampuan</h2>
            <table cellSpacing="5">{listAbility}</table>
          </div>
        </div>
        <div className={themeClassEducation}>
          <h2>Riwayat Pendidikan</h2>
          <ul>{listStudies}</ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
