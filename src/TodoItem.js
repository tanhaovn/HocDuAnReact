import React, { useState } from "react";
import "./App.css";

function TodoItem({ todo, handleDeleteTodo, handleUpdateTodo }) {
  const [name, setName] = useState(todo.name);
  const [isEdit, setIsEdit] = useState(false);

  const handleUpdate = () => {
    handleUpdateTodo(todo.id, name);
    setIsEdit(false);
  };

  return (
    <div>
      {isEdit ? (
        <div>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <button onClick={handleUpdate}>Update</button>
        </div>
      ) : (
        <>
          <h3 onClick={() => setIsEdit(!isEdit)}>{todo.name}</h3>
          <span onClick={() => handleDeleteTodo(todo.id)}>X</span>
        </>
      )}
    </div>
  );
}

export default TodoItem;
