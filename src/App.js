import './App.css';

import React, { Component } from 'react'
import TodoList from './Components/TodoList';
import AddTodo from "./Components/AddTodo"
class App extends Component {
  state={
    todos:[
      {
        id:1,
        title:"hello from GoMyCode Nabeul",
        completed:false,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRme26WOvMv0m1Iu462Md2Y1rSXZoAPrVUB7oAaJ6lHSm6MgLRLPC7sAlvBYYeziSVQkLU&usqp=CAU"

      },
      {
        id:2,
        title:"Ws-State F3",
        completed:false,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRme26WOvMv0m1Iu462Md2Y1rSXZoAPrVUB7oAaJ6lHSm6MgLRLPC7sAlvBYYeziSVQkLU&usqp=CAU"
      },
      {
        id:3,
        title:"take coffee",
        completed:false,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRme26WOvMv0m1Iu462Md2Y1rSXZoAPrVUB7oAaJ6lHSm6MgLRLPC7sAlvBYYeziSVQkLU&usqp=CAU"
      }
    ]
  }

  done = (id)=>{
    this.setState({todos:this.state.todos.map(todo=>{
      if(todo.id === id){
        todo.completed =! todo.completed
      }
      return todo
    })})
  }

  delTodo = id =>{
    console.log(id)
     this.setState({todos:[...this.state.todos.filter(todo =>
      todo.id !== id)]})
  }

  addTodo = (title) =>{
    const newTodo = {
      id: Math.random(),
      title:title,
      completed:false,
      img:"https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/13/BOPiR52j-IMG-Worlds-of-Adventure---Lost-Valley---Dinosaur-Adventure---Predator-1_8289878-1200x800.jpg"
    }
    this.setState({todos:[...this.state.todos,newTodo]})
  }

  render() {
    
    return (
      <div>   
        <AddTodo addTodo={this.addTodo} />  
        <TodoList todos={this.state.todos} done={this.done} delTodo={this.delTodo} />
      </div>
    )
  }
}

export default  App
