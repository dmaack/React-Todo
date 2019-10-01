import React from 'react';
import styled from 'styled-components';


class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todo: ''
        }
    }

    handleChangeItem = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.state.todo !== "" && this.props.addTodo(this.state.todo);
        this.setState({ todo: '' })
    }

    render(){
        return (
        
            <form onSubmit={this.handleSubmit}>
                <FormContainer>
                <AddItem
                    onChange={this.handleChangeItem}
                    type='text'
                    name='todo'
                    value={this.state.todo}
                    // placeholder= ''
                />
                <AddButton onClick={this.props.handleaddItem}>Add New Task</AddButton>
                <ClearButton onClick={this.props.handleclearCompleted}>Clear Completed</ClearButton>
                </FormContainer>
            </form>
            
        )
    }
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

