import React, { useState } from "react";
import "./App.css";
import TodoItem from "./TodoItem";

function App() {
  const [todos, setTodos] = useState([
    { name: "Đi học", id: "111" },
    { name: "Đi ngủ", id: "112" },
  ]);
  const [inputState, setInputState] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const handleAddTodo = () => {
    setTodos((prev) => [...prev, { name: inputState, id: Math.random() }]);
  };

  const handleDeleteTodo = (idDelete) => {
    const filtered = todos.filter((item) => item.id !== idDelete);
    setTodos(filtered);
  };

  const handleUpdateTodo = (id, newName) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, name: newName } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className="App">
        <div>
          <input
            value={inputState}
            onChange={(e) => {
              setInputState(e.target.value);
            }}
          />
          <input onClick={handleAddTodo} type="button" value="Add" />
        </div>

        {todos.map((todo, index) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleDeleteTodo={handleDeleteTodo}
              handleUpdateTodo={handleUpdateTodo}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
