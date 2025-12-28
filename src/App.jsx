import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import { TodoProvider } from "./context/todocontext";



function App(){
  return(
    <TodoProvider>
      <div>
        <Header />
        <TodoForm />
        <TodoList />
        <Footer />
      </div>
    </TodoProvider>
  )
}

export default App