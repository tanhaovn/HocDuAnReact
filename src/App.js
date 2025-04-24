import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([{ name: "Đi học" }, { name: "Đi ngủ" }]);
  const [inputState, setInputState] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const handleAddTodo = () => {
    setTodos((prev) => [...prev, { name: inputState }]);
  };

  const handleDeleteTodo = (nameDelete) => {
    const filtered = todos.filter((item) => item.name !== nameDelete);
    setTodos(filtered);
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
            <div key={index} className="todo-item">
              {isEdit ? (
                <input value={todo.name} />
              ) : (
                <>
                  <h3 onClick={() => setIsEdit(!isEdit)}>{todo.name}</h3>
                  <span onClick={() => handleDeleteTodo(todo.name)}>X</span>
                </>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
