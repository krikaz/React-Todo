import React from 'react';

export default function Todo({id, task, completed }) {
  const onComplete = event => {
    event.completed = !event.completed;
    event.target.classList.toggle('line');
  };

  return (
    <div key={id} onClick={onComplete}>
      {task}
    </div>
  );
}
