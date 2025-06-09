import React, { useState } from 'react';

export default function Create({ addTodo }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title.trim());
      setTitle('');
    }
  };

  return (
    <div className="container mt-4">
      <h3>Add a New Todo</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter todo..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit" className="btn btn-success">Add</button>
        </div>
      </form>
    </div>
  );
}
