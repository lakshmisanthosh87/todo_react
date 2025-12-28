import { useContext,useState } from "react";
import { TodoContext } from "../context/todocontext";

const TodoItem = ({todo})=>{
     const [deleteTodos,updateTodos] = useContext(TodoContext)

     const [isEditing , setIsEditing] = useState(false)
     const [text, setText] = useState(todo.text)

     const handleUpdate =()=>{

        updateTodos(todo.id,text)

        setIsEditing(false)
     }

     return(
        <div>
            {isEditing ? (
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />

            ): ( <span>{todo.text}</span>)}

            <div>
                {isEditing ? (
                    <button onClick={handleUpdate}>save</button> ):(
                    <button onClick={()=>setIsEditing(true)}>edit</button>
                    )
                }

                <button onClick={() =>deleteTodos(todo.id)} >Delete</button>

            </div>
        </div>
            
     )
}

export default TodoItem