import React from 'react';
import Title from '../components/Title';
import DodoCreateForm from '../components/DodoCreateForm';
import DodoList from '../components/DodoList';

const DodoPage = () => {
  const [todos, setTodos] = React.useState([]);

  const handleTodoSubmit = (newTodo) => {
    const result = [...todos];
    result.push(newTodo);
    setTodos(result);
  };

  const handleTodosChange = (newTodos) => {
    setTodos(newTodos);
  } 

  return (
    <div>
      <Title />
      <DodoCreateForm
        onSubmit={handleTodoSubmit}
      />
      <DodoList
        todos={todos}
        onTodosChange={handleTodosChange}
      />
    </div>
  );
};

export default DodoPage;
