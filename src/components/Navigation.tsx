import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <Link to="/">Weather App</Link>
        </li>
        <li>
          <Link to="/editor">Online Editor</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;