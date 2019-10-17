import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {
    // render(){
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
    
    // }

export default TodoList;

const TodoListContainer = styled.div`
background: white;
width: 80%;
margin-top: 10px;
padding: 5px 20px;
border-radius: 5px;
    font-size: 1.6rem;
    margin: 1% 2%;
    display: flex;
    flex-direction: column;
`;