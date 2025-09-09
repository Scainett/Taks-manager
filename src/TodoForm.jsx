
import React, { useState } from 'react';
import './TodoForm.css';

function TodoForm({ addTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTodo(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Agregar nueva tarea"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" class="btn btn-outline-success">Agregar</button>
    </form>
  );
}

export default TodoForm;