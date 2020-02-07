import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

const Todolist = (props) => {
    console.log(props.todos);
    
    return(
        <div>
            <ul>
                { props.todos && props.todos.length ?
                    
                        props.todos.map((row,index)=>{
                            // return <li>{row.content}</li>
                            return <Todo key={index} row={row} />
                        })
                    
                    :
                    <li>nothings</li>
                }
            </ul>
            
        </div>
    );
};

const mapTodoList = state =>{
    return{
        todos: state.data
    }
}

export default connect(mapTodoList)(Todolist);

