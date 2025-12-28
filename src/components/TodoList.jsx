import { useContext } from "react";
import { TodoContext } from "../context/todocontext";
import TodoItem from "./TodoItem";


const TodoList =()=>{
    const {todos} = useContext(TodoContext)

    return(
        <div>
            {todos.lenght == 0 && (
                <p>no todo list</p>
            )}

            {todos.map(todo => (
                <TodoItem key ={todo.id} todo ={todo} />
            ))}
        </div>
    )
} 


export default TodoList