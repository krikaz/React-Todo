import React from 'react';

export default function Todo({id, task, onComplete }) {
  const onClickedCompleted = event => {
    onComplete(id);
    event.target.classList.toggle('line');
  };

  return (
    <div key={id} onClick={onClickedCompleted}>
      {task}
    </div>
  );
}
