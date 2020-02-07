import React from 'react'
import { connect } from 'react-redux'
import { toggeltodo } from '../redux/todo/actions'

const Todo = (props) => {
    console.log('aaaaaaa', props.row)
        return ( 
            <React.Fragment>
                <li onClick={()=> props.toggeltodo(props.row.id) }>
                    { props.row && props.row.complete  ?
                        <span style={{ color:'green' }} > Done </span>
                        :
                        <span style={{ color:'red' }} > To-do </span>

                    }
                    - {props.row.content}
                </li>
            </React.Fragment>

         );
}
 
const mapDispachToPages = dispatch =>{
    return{
        toggeltodo: id => dispatch(toggeltodo(id))
    }
}

export default connect(null,mapDispachToPages)(Todo);
