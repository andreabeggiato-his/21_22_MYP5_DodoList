import DodoItem from './DodoItem';

const DodoList = () => {
  const todo1 = {
    checked: true,
    text: 'First todo',
    dueDate: new Date(),
  };
  const todo2 = {
    checked: false,
    text: 'Second todo',
    dueDate: new Date(),
  };
  const todo3 = {
    checked: true,
    text: 'Procastination',
    dueDate: new Date(),
  };

  const todos = [todo1, todo2, todo3];

  const result = [];
  for (let i = 0; i < todos.length; i += 1) {
    const currentTodo = todos[i];
    result.push(<DodoItem />);
  }

  return (
    <div>
      {result}
    </div>
  );

};

export default DodoList;
