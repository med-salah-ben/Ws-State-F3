import React, { Component } from 'react'

 class AddTodo extends Component {
     state={
         title:""
     }

     handleChange = (e)=>{
         this.setState({[e.target.name]:e.target.value})
     }

     onSubmit=(e)=>{
         e.preventDefault()
         this.props.addTodo(this.state.title)
         this.setState({title:""})
     }

    render() {
        return (
            <div>
            <form style={{width:"300px",marginLeft:"40% " }} onSubmit={this.onSubmit}>
                <input type="text" onChange={this.handleChange} placeholder="Add Todo ... " name='title' value={this.state.title} />
                <input  type="submit" value="submit" />
            </form>
            </div>
        )
    }
}

export default AddTodo