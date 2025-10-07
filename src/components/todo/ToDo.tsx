import {useRef, useState} from "react";
import ToDoForm from "./ToDoForm.tsx";
import type {ToDoProps} from "../../types.ts";
import ToDoList from "./ToDoList.tsx";

const ToDo =()  => {
  const [todos, setTodos] = useState<ToDoProps[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = (text: string) => {
    setTodos(prev => [
      ...prev,
      { id:Date.now(), text, completed: false },
      ]);
    console.log(todos);
  };

  const deleteTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }

  const editTodo = (id: number, newText: string) => {
    setTodos(prev => prev.map(todo =>
    todo.id === id ? {...todo, text:newText}: todo
    )
    );
  };

  const toggleTodo = (id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed}: todo
      )
    );
  };

  return (
    <>
      <div className="max-w-sm mx-auto">
        <h1 className="text-center text-2xl py-8">To-Do List</h1>

        <ToDoForm addToDo={addTodo} inputRef={inputRef}/>

        <ToDoList
          todos={todos}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          toggleTodo={toggleTodo}/>

      {/*  Component: ToDoStats  */}
      {/*  Component: Button  */}


      </div>
    </>
  )
}

export default ToDo;