import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
    console.log("TodoList",props.todos)
   
    return (
        <div style={{padding:"10px 30px"}}>
            {props.todos.map(todo=>(
                <Todo todo={todo} key={todo.id} done={props.done} delTodo={props.delTodo} />
            ))}
        </div>
    )
}

export default TodoList
