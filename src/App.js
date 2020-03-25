import React, { useState, useEffect } from 'react';
import './App.css';

import TodoService from './services/todo-service';

import TodoForm from './components/TodoForm';
import Todo from './components/Todo';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(
    () => hydrateState(),
    [],
  );

  useEffect(
    () => TodoService.set(todos),
    [todos],
  );

  /* Hydrates state on first page load  */
  const hydrateState = () => {
    const initialStoredItems = TodoService.get();

    setTodos(initialStoredItems || [
      {
        text: 'Faire les courses',
        isCompleted: false,
      },
      {
        text: 'Remplir l\'attestation de sortie',
        isCompleted: false,
      },
      {
        text: 'Appeler Mamie',
        isCompleted: false,
      },
    ]);
  };

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    const completed = newTodos[index].isCompleted;

    newTodos[index].isCompleted = !completed;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <header>
        <h1>Todo App</h1>
      </header>
      <section>
        <div className="todo-list">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
      </section>
    </div>
  );
}

export default App;
