import React from 'react';

export default function Todo({id, task, markCompleted }) {
  const onClickedCompleted = event => {
    event.target.classList.toggle('line');
    markCompleted(id);
  };

  return (
    <div key={id} onClick={onClickedCompleted}>
      {task}
    </div>
  );
}
