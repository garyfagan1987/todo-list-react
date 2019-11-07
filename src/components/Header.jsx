import React, { useContext } from 'react';
import { TodosContext } from '../contexts/TodosContext';

const Header = () => {
  const { todos } = useContext(TodosContext);
  return (
    <h1>All Tasks ({todos.length})</h1>
  )
}

export default Header;
