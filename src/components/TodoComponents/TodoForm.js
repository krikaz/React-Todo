import React from 'react';

export default function TaskAdder({ task, changeHandler, addTask, clearCompleted }) {
  return (
    <div>
      <input value={task} onChange={changeHandler} type="text" />
      <button onClick={addTask}>Add Task</button>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
}