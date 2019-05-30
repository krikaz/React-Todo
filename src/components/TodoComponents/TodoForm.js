import React from 'react';

export default function TaskAdder({ task, changeHandler, addTodo, clearCompleted }) {
  // const onAddTask = event => {
  //   addTask();
  // }

  // const onClearCompleted = event => {
  //   clearCompleted();
  // }

  // const onChangeHandler = event => {
  //   changeHandler();
  // }

  return (
    <div>
      <input value={task} onChange={changeHandler} type="text" />
      <button onClick={addTodo}>Add Task</button>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
}