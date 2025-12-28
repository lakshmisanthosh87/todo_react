import { useContext ,useState } from "react";
import { TodoContext } from "../context/todocontext";


const TodoForm =()=>{

    const [text,setText] = useState("")
    const {addTodos} = useContext(TodoContext)


    const handleSubmit =(e)=>{
         e.preventDefault ()

         if(!text.trim()) return;
         addTodos(text)
         setText("")
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter a todo" value ={text}  onChange={(e)=>setText(e.target.value)} />
             
             <button>Add</button>

        </form>
    )
}


export default TodoForm