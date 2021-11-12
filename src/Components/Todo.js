import React, { Component } from 'react'

class Todo extends Component {

    getStyle = ()=>{
        return {
            textDecoration : this.props.todo.completed ? 
            "line-through" : "none",
            background:"#f6f6f6",
            color:"black",
            border:"1px black solid"
        }
    }
    
    render() {
        console.log("Todo ",this.props.todo)
      
        const {title,id,img} = this.props.todo
        return (
            <div style={this.getStyle()} >
                <p>
                 <input type="checkbox" onChange={this.props.done.bind(this,id)}  />
                 <img style={{width:"70px", padding:"0 20px"}} src={img} alt={Math.random()}  />
                 {title}
                <button onClick={this.props.delTodo.bind(this,id)} style={{background:"red",float:"right", height:"20px"}}  >x</button>
                </p>
            </div>
        )
    }
}

export default  Todo