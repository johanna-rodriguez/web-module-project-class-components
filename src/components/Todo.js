import React from "react";
import "./Todo.css";
import "../style.css";

const Todo = props => {
    const handleClick =() => {
        props.handleTodoClick(props.item.id)
    }


    return (
      <div className={`item ${props.item.completed ? "completed" : ""}`}>
        <p onClick={handleClick}>
          {props.item.task}
        </p>
      </div>
    );
}
export default Todo;
