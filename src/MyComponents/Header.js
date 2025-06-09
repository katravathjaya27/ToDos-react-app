import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header({ title }) {
  const location = useLocation();

  const linkClass = (path) =>
    `nav-link ${location.pathname === path ? 'active text-light bg-dark' : 'text-white'}`;

  return (
    <ul className="nav nav-tabs bg-primary px-4">
      <li className="nav-item">
        <Link className={linkClass('/')} to="/">{title}</Link>
      </li>
      <li className="nav-item">
        <Link className={linkClass('/create')} to="/create">Create List</Link>
      </li>
      <li className="nav-item">
        <Link className={linkClass('/completed')} to="/completed">Completed List</Link>
      </li>
    </ul>
  );
}
