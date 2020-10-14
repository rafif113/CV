import React from 'react';
import ig from '../assets/ig.jpg';
import line from '../assets/line.jpg';

const Footer = () => {
  const Coba = (link) => {
    return (
      <>
        linkedIn :
        {' '}
        <a href={link.name}>{link.nama}</a>
      </>
    );
  };
  const Ig = (props) => {
    const { id } = props;
    return (
      <>
        Instagram :
        {' '}
        <a href={id.name}>{id.nama}</a>
      </>
    );
  };

  const contacts = [
    'No Telepon : 082116097045',
    'Email : rafifyusuf@gmail.com',
    <Coba
      name="//www.linkedin.com/in/rafifyusuf113/"
      nama="Rafif Yusuf Avandy"
    />,
    <Ig name="https://www.instagram.com/rafifbopip/" nama="rafifbopip" />,
  ];
  const listContacts = contacts.map((contact) => {
    return <p>{contact}</p>;
  });

  return (
    <div className="container">
      <div className="footer">
        <hr className="style1" />
        <div className="row">
          <div className="f-leftcolumn">
            <h2>Kontak</h2>
            {listContacts}
          </div>
          <div className="f-rightcolumn">
            <img src={ig} alt="ig" />
            <img src={line} alt="line" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
