import React, { useState } from 'react';
import t from 'prop-types';

import './TodoForm.css';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;

    addTodo(value);
    setValue('');
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form
      className="TodoForm-form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="TodoForm-input"
        placeholder="Rendre le projet d'appli ouaibe, faire les courses, etc..."
        value={value}
        onChange={handleChange}
      />
    </form>
  );
};

TodoForm.propTypes = {
  addTodo: t.func.isRequired,
};

export default TodoForm;
