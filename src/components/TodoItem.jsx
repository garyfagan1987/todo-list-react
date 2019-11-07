import React, { useContext, useState } from 'react';
import { TodosContext } from '../contexts/TodosContext';

const TodoItem = ({todo}) => {
  const { dispatch } = useContext(TodosContext);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseHover = () => {
    isHovering ? setIsHovering(false) : setIsHovering(true);
  }

  return (
    <li
      onClick={() => dispatch({type: 'REMOVE_TODO', id: todo.id})}
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseHover}
      key={todo.id}
    >
      {todo.title}
      <span className="icons">
        {isHovering ? <i class="pr fas fa-check-circle"></i> : <i class="pr far fa-circle"></i>}
      </span>
    </li>
  );
}

export default TodoItem;