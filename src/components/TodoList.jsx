import React, { useContext } from 'react';
import { TodosContext } from '../contexts/TodosContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos } = useContext(TodosContext);

  return todos.length ? (
    <ul className="todo-list">
      {todos.map(todo => <TodoItem todo={todo} />)}
    </ul>
  ) : (
    <p className="empty"><i class="far fa-laugh-beam"></i> No tasks, enjoy your day</p>
  );
}

export default TodoList;