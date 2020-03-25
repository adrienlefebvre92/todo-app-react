import React from 'react';
import t from 'prop-types';

import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ActionButton from '../ActionButton';

import './Todo.css';

const Todo = ({
  todo, index, completeTodo, removeTodo,
}) => (
  <div
    className="Todo"
    style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
  >
    {todo.text}

    <div className="Todo-actions">
      <ActionButton onClick={() => completeTodo(index)}>
        <FontAwesomeIcon icon={faCheck} />
      </ActionButton>
      <ActionButton onClick={() => removeTodo(index)}>
        <FontAwesomeIcon icon={faTrash} />
      </ActionButton>
    </div>
  </div>
);

Todo.propTypes = {
  todo: t.object.isRequired,
  index: t.number.isRequired,
  completeTodo: t.func.isRequired,
  removeTodo: t.func.isRequired,
};

export default Todo;
