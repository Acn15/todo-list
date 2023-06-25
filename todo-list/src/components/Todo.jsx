const Todo = ({ item }) => {
  return (
    <div className="todo">
      <div className="content">
        <p>{item.text}</p>
        <div className="category"> ({item.category})</div>
      </div>
      <>
        <button className="complete">Completar</button>
        <button className="remove">Delete</button>
      </>
    </div>
  );
};

export default Todo;
