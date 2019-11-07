import React, { useContext, useState } from 'react';
import { TodosContext } from '../contexts/TodosContext';

const TodoForm = () => {
  const { dispatch } = useContext(TodosContext);
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'ADD_TODO', todo: { title }});
    setTitle('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a task"
        required
        type="text"
        value={title}
      />
    </form>
  )
}

export default TodoForm;