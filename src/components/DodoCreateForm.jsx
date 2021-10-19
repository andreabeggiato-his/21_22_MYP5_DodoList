import React from 'react';

const DodoCreateForm = (props) => {

  const onSubmit = props.onSubmit;

  const [text, setText] = React.useState('');
  const [date, setDate] = React.useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleClick = () => {
    const newTodo = {
      done: false,
      text: text,
      dueDate: date,
    };
    onSubmit(newTodo);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type your text"
        onChange={handleTextChange}
        value={text}
      />
      <input
        type="date"
        placeholder="Type your date"
        onChange={handleDateChange}
        value={date}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default DodoCreateForm;
