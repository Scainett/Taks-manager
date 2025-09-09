

import React, { useState } from 'react';
import './TodoItem.css';

function TodoItem({ todo, toggleComplete, deleteTodo, style }) {
  const [isRemoving, setIsRemoving] = useState(false);

  const handleDelete = () => {
    setIsRemoving(true);
    setTimeout(() => {
      deleteTodo(todo.id);
    }, 300); // duración de la animación
  };

  return (
    <li
      className={`${todo.completed ? 'completed' : ''} ${isRemoving ? 'removing' : ''}`}
      style={style}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <span>{todo.text}</span>
      <button onClick={handleDelete} type="button" class="btn btn-outline-danger">Eliminar</button>
    </li>
  );
}
export default TodoItem;