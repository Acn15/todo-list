const Todo = ({ item, removeTask, completeTask }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: item.isCompleted ? "line-through" : "" }}
    >
      <div className="content">
        <p>{item.text}</p>
        <div className="category"> ({item.category})</div>
      </div>
      <>
        <button className="complete" onClick={() => completeTask(item.id)}>
          Completar
        </button>
        <button className="remove" onClick={() => removeTask(item.id)}>
          Delete
        </button>
      </>
    </div>
  );
};

export default Todo;
