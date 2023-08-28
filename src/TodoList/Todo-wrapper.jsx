import { useState } from "react"
import { Input } from "./TodoInput"
import { TodoList } from "./TodoList"


export const TodoWrapper=()=>{
  let [todoName,setTodoName]=useState([])
  console.log(todoName);
    return(
      <>
      <div className="todo-wrapper d-flex justify-content-center w-100 align-items-center" style={{"minHeight":"100vh"}}>
        <div className="todo-inner w-25 mx-auto">
         <Input todoName={todoName} setTodoName={setTodoName}/>
      <TodoList/>   
        </div>
         
      </div>
      
      </>
   
    )
}