
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (!text.trim()) return;
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    const confirmed = window.confirm('¿Estás seguro de que quieres eliminar esta tarea?');
    if (confirmed) {
      setTodos(todos.filter(todo => todo.id !== id));
    }
  };

  const total = todos.length;
  const completed = todos.filter(todo => todo.completed).length;
  const pending = total - completed;

  return (
    <div className="app-container">
      <h1>Lista de Tareas</h1>
      <TodoForm addTodo={addTodo} />
      <div className="stats">
        <p>Total: {total}</p>
        <p>Pendientes: {pending}</p>
        <p>Completadas: {completed}</p>
      </div>
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;