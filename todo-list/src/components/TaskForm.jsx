import { useState } from "react";

const TodoForm = ({ addTask }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTask(value, category);
    setValue("");
    setCategory("");
    console.log(value, category);
  };

  return (
    <div className="todo-form">
      <h2>New Task:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          placeholder="Type the title"
          onChange={(e) => setValue(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select a category</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Studies">Studies</option>
        </select>
        <button type="submit">Create a task</button>
      </form>
    </div>
  );
};

export default TodoForm;
