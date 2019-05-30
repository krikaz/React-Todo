import React from 'react';
import TaskAdder from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

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
      newTask: 'Add a new Todo',
      currentFriendId: null
    };
  }

  changeHandler = event => {
    this.setState({
      newTask: event.target.value
    });
  };

  addTodo = () => {
    this.setState(state => {
      const newTodo = {
        task: state.newTask,
        id: Date.now(),
        completed: false
      };

      return {
        toDoList: state.toDoList.concat(newTodo),
        newTask: ''
      };
    });
  };

  markCompleted = id => {
    this.setState(state => ({
      toDoList: state.toDoList.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    }));
  };

  clearCompleted = () => {
    this.setState(state => ({
      toDoList: state.toDoList.filter(todo => todo.completed === false)
    }));
  };

  log = () => {
    console.log(this.state.toDoList);
  };

  render() {
    return (
      <div>
        <h2>To Do List</h2>
        <TodoList
          toDoList={this.state.toDoList}
          markCompleted={this.markCompleted}
        />

        <TaskAdder
          newTask={this.state.newTask}
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
