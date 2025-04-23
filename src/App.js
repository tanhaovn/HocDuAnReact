import React, { useState } from "react";
// import Card from "./Card";
import "./App.css";

function App() {
  // const [count, setCount] = useState(1);
  // const handleCount = () => {
  //   setCount(count + 1);
  //   console.log(count);
  // };
  const [todos, setdTodos] = useState([{ name: "Đi học" }, { name: "Đi ngủ" }]);
  const [inputState, setInputState] = useState("");
  return (
    <>
      {/* <div className="App">
        <div>Count: {count}</div>
        <button onClick={handleCount}>More</button>
      </div> */}
      <div className="App">
        <div>
          <input
            value={inputState}
            onChange={(e) => {
              setInputState(e.target.value);
            }}
          />
        </div>
        {todos.map((todo, index) => {
          return <div key={index}>{todo.name}</div>;
        })}
      </div>
    </>
  );
}

export default App;
