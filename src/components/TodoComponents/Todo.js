import React from 'react';


class Task extends React.Component {
    render() {
        return (
            <div
                style={this.props.todo.completed ? {textDecoration: 'line-through'} : null}
                onClick={() => this.props.toggleItem(this.props.todo.id)}
            >
                <p>{this.props.todo.task}</p>
            </div>
        )
    }
    }


export default Task;