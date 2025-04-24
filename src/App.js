import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {});
  return (
    <div className="App">
      <h2>Helo</h2>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}

export default App;
