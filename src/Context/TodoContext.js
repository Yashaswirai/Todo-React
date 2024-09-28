import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            text:"Todo 1",
            completed:false
        },
    ],
    AddTodo:(todo) => {},
    UpdateTodo:(id,updatedTodo) => {},
    DeleteTodo:(id) => {},
    ToggleTodo:(id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
  const context = useContext(TodoContext);
  return context;
};
