import React from 'react';


const Task = props => {
    return (
        <div
            style={props.todo.completed ? {textDecoration: 'line-through'} : null}
            onClick={() => props.toggleItem(props.todo.id)}
        >
            <p>{props.todo.task}</p>
        </div>
    )
}

export default Task;