import React from 'react';


const TodoForm = props => {
    return (
        <form>
            <input
                onChange={props.handlechangeItem}
                type='text'
                name='todo'
                value={props.value}
                // placeholder= ''
            />
            <button onClick={props.handleaddItem}>Add New Task</button>
            <button onClick={props.handleclearCompleted}>Clear Completed</button>
        </form>
    )
}

export default TodoForm;



// class TodoForm extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             task: ''
//         };
//     }

//     handleChanges = e => {
//         this.setState({
//             [e.target.name]: e.target.vlaue
//         });
//     };

//     submitItem = e => {
//         e.preventDefault();
//         this.props.addItem(this.state.item);
//     }

//     render() {
//         return(
//             <form onSubmit={this.submitItem}>
//                 <input
//                     type='text'
//                     value={this.state.item}
//                     name='task'
//                     onChange={this.handleChanges}
//                     />
//                 <button>Add</button>
//             </form>
//         )
//     }
// }

// export default TodoForm;

