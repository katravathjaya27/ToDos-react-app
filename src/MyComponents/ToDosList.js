import React from 'react';

export default function TodosList({ todos, deleteTodo, markDone }) {
  return (
    <div className="container mt-4">
      <h3>Active Todos</h3>
      {todos.length === 0 && <p className="text-muted">No todos yet.</p>}
      {todos.map(todo => (
        <div key={todo.id} className="d-flex justify-content-between align-items-center border rounded p-2 mb-2">
          <span>{todo.title}</span>
          <div>
            <button onClick={() => markDone(todo.id)} className="btn btn-sm btn-success me-2">Done</button>
            <button onClick={() => deleteTodo(todo.id)} className="btn btn-sm btn-danger">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
