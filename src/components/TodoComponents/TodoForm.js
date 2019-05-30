import React from 'react';

export default function TaskAdder({
  newTask,
  changeHandler,
  addTodo,
  clearCompleted
}) {
  return (
    <div>
      <input value={newTask} onChange={changeHandler} type="text" />
      <button onClick={addTodo}>Add New Task</button>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
}
