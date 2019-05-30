import React from 'react';
import TaskAdder from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './App.css';

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
      task: 'Add a new Task'
    };
  }

  changeHandler = event => {
    this.setState({
      task: event.target.value
    });
  };

  addTask = () => {
    const newTask = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };

    if (newTask.task) {
      this.setState(state => ({
        toDoList: state.toDoList.concat(newTask),
        task: ''
      }));
    }
  };

  clearCompleted = () => {
    const newTaskList = this.state.toDoList.filter(
      task => task.completed === false
    );
    this.setState({
      toDoList: newTaskList
    });
  };

  render() {
    return (
      <div>
        <h2>To Do List</h2>
        {/* TodoList(this.state.toDoList); */}
        TodoList({this.state.toDoList});

        <TaskAdder
          task={this.state.task}
          changeHandler={this.changeHandler}
          addTask={this.addTask}
          clearCompleted={this.clearCompleted}
        />

      </div>
    );
  }
}



export default App;
