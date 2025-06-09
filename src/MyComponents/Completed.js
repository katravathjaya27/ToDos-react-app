import React from 'react';

export default function Completed({ completed }) {
  return (
    <div className="container mt-4">
      <h3>Completed Todos</h3>
      {completed.length === 0 ? (
        <p className="text-muted">No completed todos.</p>
      ) : (
        completed.map(todo => (
          <div key={todo.id} className="border rounded p-2 mb-2 bg-light">
            ✅ {todo.title}
          </div>
        ))
      )}
    </div>
  );
}
