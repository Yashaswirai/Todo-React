import React, { useState } from "react";
import { useTodo } from "../Context";

function TodoForm() {
    const {AddTodo} = useTodo();
    const [todo,setTodo] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(todo.trim()){
            AddTodo({id:Date.now(),text:todo,completed:false});
            setTodo("");
        }
        else{
            alert("Please enter a todo");
        }
    }
  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
