import React from 'react';
import './Todo.css';

export default function Todo({ todo, markCompleted }) {
  const onClickedCompleted = event => {
    event.target.classList.toggle('line');
    markCompleted(todo.id);
  };

  return <div onClick={onClickedCompleted}>{todo.task}</div>;
}
