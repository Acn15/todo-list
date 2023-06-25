import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TaskForm from "./components/TaskForm";

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

  return (
    <div className="app">
      <h1>To Do List </h1>
      <div className="todo-list">
        {all.map((item) => (
          <Todo key={item.id} item={item} />
        ))}
      </div>
      <TaskForm addTask={addTask} />
    </div>
  );
}

export default App;
