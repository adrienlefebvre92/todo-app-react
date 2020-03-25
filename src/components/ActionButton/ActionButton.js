import React from 'react';

import './ActionButton.css';

const ActionButton = ({ onClick, children }) => {
  return (
    <button
      className="ActionButton"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ActionButton;
