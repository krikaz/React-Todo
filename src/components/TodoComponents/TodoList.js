// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

export default function TodoList({toDoList}) {
  // const result = toDoList.map(taskObj => {<Todo id={taskObj.id} task={taskObj.task} completed={taskObj.completed} />});
  // const result = <Todo id={toDoList[0].id} task={toDoList[0].task} completed={toDoList[0].completed} />
  // const result1 = <Todo id={toDoList[1].id} task={toDoList[1].task} completed={toDoList[1].completed} />

  const result = toDoList.map(taskObj => 
    <Todo key={taskObj.id} task={taskObj.task} completed={taskObj.completed} />
  );

  return (
    <div>
      {/* {result}
      {result1} */}
      {result}
    </div>
  );
}
