import '../styles/dodoItem.scss';

const DodoItem = (props) => {

  const date = props.date;
  const text = props.text;
  const done = props.done;
  const index = props.index;
  const onTodoChange = props.onTodoChange;

  const dateString = date.toString();

  const handleClick = () => {
    onTodoChange(index);
  };

  return (
    <div
      className="dodoItem"
      onClick={handleClick}
    >
      <div>{done ? 'Y' : 'N'}</div>
      <div>{text}</div>
      <div>{dateString}</div>
    </div>
  );
};

export default DodoItem;
