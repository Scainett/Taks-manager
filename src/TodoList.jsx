
import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList({ todos, toggleComplete, deleteTodo }) {
  if (todos.length === 0) {
    return <p className="empty-message">No hay tareas pendientes.</p>;
  }

  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          style={{ animationDelay: `${index * 0.1}s` }}
        />
      ))}
    </ul>
  );
}

export default TodoList;