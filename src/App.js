import React from 'react';

const initialData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      toDoList: initialData,
      task: 'start here'
    };
  }

  changeHandler = event => {
    this.setState({
      task: event.target.value
    });
  };

  addTask = () => {
    const newtask = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      toDoList: this.state.toDoList.concat(newtask),
      task: ''
    });
  };

  markComplete = id => {
    console.log(id);
    console.log('done');
  };

  log = () => {
      console.log(this.state.toDoList);
  }

  render() {
    return (
      <div>
        <h2>To Do List</h2>
        {this.state.toDoList.map(taskObj => (
          <div key={taskObj.id}>
            {taskObj.task}
            {/* <button onClick={() => this.markComplete(taskObj.id)}>Done</button> */}
            <button onClick={() => taskObj.completed = !taskObj.completed}>{taskObj.completed.toString()}</button>
          </div>
        ))}

        <TaskAdder
          task={this.state.task}
          changeHandler={this.changeHandler}
          addTask={this.addTask}
        />

        <button onClick={this.log}>log</button>
      </div>
    );
  }
}

function TaskAdder({ task, changeHandler, addTask }) {
  return (
    <div>
      <input value={task} onChange={changeHandler} type="text" />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

export default App;
