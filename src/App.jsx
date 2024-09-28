import "./App.css";
import TodoForm from "./Components/TodoForm";
import { TodoProvider } from "./Context";
import { useEffect, useState } from "react";
import Todoitems from "./Components/Todoitems";
function App() {
  const [todos,setTodos] = useState([]);
  const AddTodo = (todo) => {
    setTodos([...todos,todo]);
  };
  const UpdateTodo = (id,updatedTodo) => {
    setTodos(todos.map((todo) => todo.id === id ? updatedTodo : todo));
  };
  const DeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const ToggleTodo = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo,completed:!todo.completed} : todo));
  };

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{todos,AddTodo,UpdateTodo,DeleteTodo,ToggleTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4"><TodoForm/></div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=>(
              <div key={todo.id} className="w-full">
                <Todoitems todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
