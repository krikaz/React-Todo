import React from 'react';

export default function Todo({ taskObj }) {
  const onComplete = event => {
    taskObj.completed = !taskObj.completed;
    event.target.classList.toggle('line');
  };
  
  return (
    <div key={taskObj.id} onClick={onComplete}>
      {taskObj.task}
    </div>
  );
}
