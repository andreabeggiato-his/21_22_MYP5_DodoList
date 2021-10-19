import React from 'react';
import DodoItem from './DodoItem';

const DodoList = (props) => {

  const todos = props.todos;
  const onTodosChange = props.onTodosChange;

  const handleTodoChange = (clickedIndex) => {
    const result = [...todos];
    result[clickedIndex].done = !result[clickedIndex].done;
    onTodosChange(result);
  };

  const result = [];
  for (let i = 0; i < todos.length; i += 1) {
    const currentTodo = todos[i];
    result.push(
      <DodoItem
        index={i}
        text={currentTodo.text}
        date={currentTodo.dueDate}
        done={currentTodo.done}
        onTodoChange={handleTodoChange}
      />
    );
  }

  return (
    <div>
      {result}
    </div>
  );

};

export default DodoList;
