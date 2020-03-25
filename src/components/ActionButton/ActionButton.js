import React from 'react';
import t from 'prop-types';

import './ActionButton.css';

const ActionButton = ({ onClick, children }) => (
  <button
    className="ActionButton"
    onClick={onClick}
  >
    {children || 'Click Me !' }
  </button>
);

ActionButton.propTypes = {
  onClick: t.func.isRequired,
  children: t.element,
};

export default ActionButton;
