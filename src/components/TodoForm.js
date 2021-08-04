import React from "react";

class TodoForm extends React.Component {
    

    render() {
        return (
            <form onSubmit={this.props.handleAddTodo}>
            <input placeholder='...todo' value={this.props.message} onChange={this.props.handleOnChangeMessage}/>
            <button >Add Todo</button>
            <button onClick= {this.props.handleClear}>Clear Completed</button>
            </form>
           

        )
    }
}


export default TodoForm;