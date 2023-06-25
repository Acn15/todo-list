const Todo = ({ item, removeTask }) => {
  return (
    <div className="todo">
      <div className="content">
        <p>{item.text}</p>
        <div className="category"> ({item.category})</div>
      </div>
      <>
        <button className="complete">Completar</button>
        <button className="remove" onClick={() => removeTask(item.id)}>
          Delete
        </button>
      </>
    </div>
  );
};

export default Todo;
