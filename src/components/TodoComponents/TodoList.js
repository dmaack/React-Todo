import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {
    return (
        <TodoListContainer>
            {props.todos.map(todo => (
                <Todo 
                    key={todo.id} 
                    todo={todo} 
                    toggleItem={props.toggleItem} 
                />
            ))}
            {/* <button className='completed-btn' onClick={props.clearCompleted}>Completed</button> */}
        </TodoListContainer>
    )
}

export default TodoList;

const TodoListContainer = styled.div`
    font-size: 1.8rem;
    margin: 1% 2%;
    display: flex;
    flex-direction: column;
`;