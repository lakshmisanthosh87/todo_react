import { createContext,useEffect,useState } from "react";

export const TodoContext = createContext()
console.log(createContext)

export const TodoProvider = ({childern})=>{
     const [todos,setTodos] = useState(()=>{

        const saveTodos = localStorage.getItem("todos")

        return saveTodos ? JSON.parse(saveTodos) : []
     })

     useEffect(()=>{

        localStorage.setItem("todos",JSON.stringify(todos))
     },[todos])


     const addTodos=(test)=>{
        setTodos([...todos,{id:Date.now(),text}])
     };

     const deleteTodos = (id)=>{
        setTodos(todos.filter(todos => todos.id !== id))
     }

     const updateTodos = (id , newtext)=>{
        setTodos(todos.map(todo => todo.id == id ? {...todo ,text:newtext} : todo))
     }


     return(
        <TodoContext.Provider value ={{todos,addTodos,deleteTodos,updateTodos}}>
        {childern}
        </TodoContext.Provider>
     );


}