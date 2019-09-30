import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

// import Todo from 'src/components/TodoComponents/Todo.css';

// const todoData = [
//   {
//     task: 'Set up Project',
//     id: 1,
//     completed: false
//   },
//   {
//     task: 'Finish Project',
//     id: 2,
//     completed: false
//   }
// ];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Start Project',
          id: 123,
          completed: false
        }
      ],
      todo: ''
    };
  } //closes constructor

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  toggleItem = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    })
    this.setState({todos})
  }; //closes toggleItem

  addItem = e => {
    e.preventDefault();
    const newItem = {
      task: this.state.todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newItem],
      todo: ''
    });
  } // closes addTask

  changeItem = e => this.setState({ [e.target.name]: e.target.value})
  
clearCompleted = e => {
  e.preventDefault();
  let todos = this.state.todos.filter(todo => !todo.completed);
  this.setState({todos});
}

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h2>My Todo List: </h2>
          <TodoForm 
            value={this.state.todo}
            handlechangeItem={this.changeItem}
            handleaddItem={this.addItem}
            handleclearCompleted={this.clearCompleted}
          />
        </div>
        <TodoList 
          todos={this.state.todos}
          toggleItem={this.toggleItem}
          />
      </div>
    );
  } //closes render
 } //closes App

export default App;
