import React from 'react';
import DodoItem from './DodoItem';

const todo1 = {
  done: true,
  text: 'First todo',
  dueDate: new Date(),
};
const todo2 = {
  done: false,
  text: 'Second todo',
  dueDate: new Date(),
};
const todo3 = {
  done: true,
  text: 'Procastination',
  dueDate: new Date(),
};

const DodoList = () => {

  const todos = React.useState([todo1, todo2, todo3]);

  const handleTodoChange = () => {
    console.log('asdfasdf');
  };

  const result = [];
  for (let i = 0; i < todos.length; i += 1) {
    const currentTodo = todos[i];
    result.push(
      <DodoItem
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
