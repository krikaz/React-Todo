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
      task: 'Add a new Todo'
    };
  }

  changeHandler = event => {
    this.setState({
      todo: event.target.value
    });
  };

  addTodo = () => {
    const newTodo = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };

    if (newTodo.task) {
      this.setState(state => ({
        toDoList: state.toDoList.concat(newTodo),
        task: ''
      }));
    }
  };

  clearCompleted = () => {
    const newTodoList = this.state.toDoList.filter(
      todo => todo.completed === false
    );
    this.setState({
      toDoList: newTodoList
    });
  };

  changeCompleted = id => {
    this.setState({
      toDoList: this.state.toDoList.map(todo => {
        if (todo.id === id) {
          todo.completed = true;
        }
        return todo;
      })
    });
  };

  log = () => {
    console.log(this.state.toDoList);
  };

  render() {
    return (
      <div>
        <h2>To Do List</h2>
        {/* TodoList(this.state.toDoList); */}
        {/* {this.state.toDoList.map(taskObj => (
          <div
            key={taskObj.id}
            onClick={event => {
              taskObj.completed = !taskObj.completed;
              event.target.classList.toggle('line');
            }}>
            {taskObj.task}
          </div>
        ))} */}
        <TodoList
          toDoList={this.state.toDoList}
          onComplete={this.changeCompleted}
        />

        <TaskAdder
          task={this.state.task}
          changeHandler={this.changeHandler}
          addTodo={this.addTodo}
          clearCompleted={this.clearCompleted}
        />

        <button onClick={this.log}>log</button>
      </div>
    );
  }
}

export default App;
