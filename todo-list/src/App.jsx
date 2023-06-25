import { useState } from "react";
import './App.css';

function App() {
  const [all, setAll] = useState([
    {
      id: 1,
      text: "Criar projeto em Angular com db.json",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Estudar js",
      category: "Estudos",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Montar carro turbo",
      category: "Pessoal",
      isCompleted: false,
    },
  ]);

  return (
    <div className="app">
      <h1>To Do List </h1>
      <div className="todo-list">
        {all.map((item) => (
          <div className="todo" key={item.id}>
            <div className="content">
              <p>{item.text}</p>
              <div className="category"> ({item.category})</div>
            </div>
            <>
              <button>Completar</button>
              <button>Delete</button>
            </>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
