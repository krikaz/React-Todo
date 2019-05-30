// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

export default function TodoList({toDoList, markCompleted}) {

  const result = toDoList.map(todo => 
    <Todo id={todo.id} task={todo.task} markCompleted={markCompleted}/>
  );

  return (
    <div>
      {result}
    </div>
  );
}
