import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodosContextProvider from './contexts/TodosContext';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className="App">
      <TodosContextProvider>
        <Header />
        <TodoForm />
        <TodoList />
      </TodosContextProvider>
    </div>
  );
}

export default App;
