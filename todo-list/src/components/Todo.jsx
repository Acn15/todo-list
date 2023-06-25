const Todo = ({ item }) => {
  return (
    <div className="todo">
      <div className="content">
        <p>{item.text}</p>
        <div className="category"> ({item.category})</div>
      </div>
      <>
        <button>Completar</button>
        <button>Delete</button>
      </>
    </div>
  );
};

export default Todo;
