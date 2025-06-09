import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './MyComponents/Header';
import TodosList from './MyComponents/ToDosList';
import Create from './MyComponents/Create';
import Completed from './MyComponents/Completed';

function App() {
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState([]);

  const addTodo = (title) => {
    setTodos([...todos, { id: Date.now(), title }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const markDone = (id) => {
    const doneTodo = todos.find(todo => todo.id === id);
    if (doneTodo) {
      setCompleted([...completed, doneTodo]);
      deleteTodo(id);
    }
  };

  return (
    <Router>
      <Header title="Todo App" />
      <Routes>
        <Route path="/" element={<TodosList todos={todos} deleteTodo={deleteTodo} markDone={markDone} />} />
        <Route path="/create" element={<Create addTodo={addTodo} />} />
        <Route path="/completed" element={<Completed completed={completed} />} />
      </Routes>
    </Router>
  );
}

export default App;
