import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      message: "",
      list: [],
    };
  }

  handleTodoClick = (id) => {

    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    });
  };

  handleAddTodo = (event) => {
    event.preventDefault();
    this.setState({
      list: [
        ...this.state.list,
        { task: this.state.message, id: Date.now(), completed: false },
      ],
      message: "",
    });
  };

  handleClear = () => {
    // event.preventDefault();
    console.log('test')
    this.setState({
    ...this.state,
      list: this.state.list.filter(item=>{
        return(item.completed === false);
      })
    });
  };

  handleOnChangeMessage = (evt) => {
    this.setState({ message: evt.target.value });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          list={this.state.list}
          handleTodoClick={this.handleTodoClick}
        />
        <TodoForm
          message={this.state.message}
          handleOnChangeMessage={this.handleOnChangeMessage}
          handleAddTodo={this.handleAddTodo}
          handleClear ={this.handleClear}
        />
      </div>
    );
  }
}

export default App;
