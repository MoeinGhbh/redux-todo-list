import React, { Component } from 'react'
import { connect } from 'react-redux'

import { inserttodo } from '../redux/todo/actions'

class addtodo extends Component {
    constructor(props){
        super(props)
        this.state={
            input:''
        }
    }

    Changehandler = (event) =>{
        this.setState({input:event.target.value})

    }

    ClickHandler=()=>{
        this.props.inserttodo(this.state.input)
        this.setState({input:''})
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.input} onChange={this.Changehandler} />
                <button onClick={this.ClickHandler} >new</button>
            </div>
        )
    }
}

export default connect(null,{inserttodo})(addtodo);