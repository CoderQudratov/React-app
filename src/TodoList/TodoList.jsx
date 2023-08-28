

export const TodoList=({todoName,setTodoName})=>{
   
    return(
        <ul>
            <li className="d-flex justify-content-between w-100 my-3">
                
                <input   className="form-control-plaintext" type="text" />
                <div className="d-flex">
                    <button className="btn btn-danger mx-1">Delete</button>
                    <button className="btn btn-success">Edit</button>
                </div>
            </li>
        </ul>
    )
}