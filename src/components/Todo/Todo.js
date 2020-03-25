import React from 'react';
import ActionButton from '../ActionButton';

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Todo.css';

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div
      className="Todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
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
};

export default Todo;
