import React from 'react';
import './Keyboard.css';
import { Link } from 'react-router-dom';

const Keyboard = () => {
  const rows = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
  ];

  return (
    <div className="keyboard">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((key, keyIndex) => (
            <div key={keyIndex} className="keyboard-key" id={key}>
              {key}
            </div>
          ))}
        </div>
      ))}
      <div className="keyboard-row">
        <Link to="/" className='keyboard-keyLogout'>Logout</Link>
      </div>
    </div>
  );
};

export default Keyboard;
