import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TaskForm from "./components/TaskForm";
import Search from "./components/Search";

function App() {
  const [all, setAll] = useState([
    {
      id: 1,
      text: "Criar projeto em Angular com db.json",
      category: "Work",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Estudar js",
      category: "Studies",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Montar carro turbo",
      category: "Personal",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState("");

  const addTask = (text, category) => {
    const newAlls = [
      ...all,
      {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setAll(newAlls);
  };

  const removeTask = (id) => {
    const newAlls = [...all];
    const filteredAlls = newAlls.filter((item) =>
      item.id !== id ? item : null
    );
    setAll(filteredAlls);
  };

  const completeTask = (id) => {
    const newAlls = [...all];
    newAlls.map((item) =>
      item.id === id ? (item.isCompleted = !item.isCompleted) : item
    );
    setAll(newAlls);
  };
  return (
    <div className="app">
      <h1>To Do List </h1>
      <Search search={search} setSearch={setSearch} />
      <div className="todo-list">
        {all
          .filter((item) =>
            item.text.toLowerCase().includes(search.toLowerCase())
          )
          .map((item) => (
            <Todo
              key={item.id}
              item={item}
              removeTask={removeTask}
              completeTask={completeTask}
            />
          ))}
      </div>
      <TaskForm addTask={addTask} />
    </div>
  );
}

export default App;
