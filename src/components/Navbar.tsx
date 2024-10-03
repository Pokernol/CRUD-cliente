import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Funções', path: '/funcoes' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href='/'><h1>CRUD CLIENTE ✏️📖🔄❌</h1></a>
      </div>
      <div className="navbar-links">
        <ul>
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.path}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
