import React from 'react';
import styled from 'styled-components';


const TodoForm = props => {
    return (
        
        <form>
            <FormContainer>
            <AddItem
                onChange={props.handlechangeItem}
                type='text'
                name='todo'
                value={props.value}
                // placeholder= ''
            />
            <AddButton onClick={props.handleaddItem}>Add New Task</AddButton>
            <ClearButton onClick={props.handleclearCompleted}>Clear Completed</ClearButton>
            </FormContainer>
        </form>
        
    )
}

export default TodoForm;

const FormContainer = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const AddItem = styled.input`
    width: 300px;
    padding: 3% 0;
`;

const AddButton = styled.button`
    width: 200px;
    padding: 2% 4%;
    margin: 2% 0;
    font-size: 1.2rem;
    font-weight: bold;
    background-color: #AED1E6;
    color: #36413E;
`;

const ClearButton = styled.button`
    width: 200px;
    padding: 2% 4%;
    margin: 2% 0;
    font-size: 1.2rem;
    background-color: lightgrey;
    color: black;
`;

