import React, { createContext, useEffect, useReducer } from 'react';
import { todoReducer } from '../reducers/TodoReducer';

export const TodosContext = createContext();

const TodosContextProvider = (props) => {
  const [todos, dispatch] = useReducer(todoReducer, [], () => {
    const localData = localStorage.getItem('todos');;
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodosContext.Provider value={{todos, dispatch}}>
      {props.children}
    </TodosContext.Provider>
  )
}

export default TodosContextProvider;