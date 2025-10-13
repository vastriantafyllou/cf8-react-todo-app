import {useEffect, useRef, useState} from "react";
import ToDoForm from "./ToDoForm.tsx";
import type {ToDoProps} from "../../types.ts";
import ToDoList from "./ToDoList.tsx";
import ToDoStats from "./ToDoStats.tsx";
import Button from "../ui/Button.tsx";

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
    setTodos(prev =>
      prev.map(todo =>
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

  const clearAll = () => {
    setTodos([]);
  }

  const totalTasks = todos.length;
  const completedTasks = todos.filter(t => t.completed).length;
  const activeTasks = totalTasks - completedTasks;

  useEffect(() => {
    inputRef.current?.focus();
  }, [todos])

  return (
    <>
      <div className="max-w-sm mx-auto pb-12">
        <h1 className="text-center text-2xl py-8">To-Do List</h1>

        {/*  Component: TodoForm */}
        <ToDoForm addToDo={addTodo} inputRef={inputRef}/>

        {/*  Component: TodoList */}
        <ToDoList
          todos={todos}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          toggleTodo={toggleTodo}/>

        {totalTasks > 0 && (
          <>
            {/*Component: ToDoStats*/}
            <ToDoStats
              total = {totalTasks}
              active = {activeTasks}
              completed = {completedTasks}
            />

            {/*Component: Clear All Button*/}
            <div className="text-end mt-4">
              <Button
                addClasses="bg-cf-dark-red"
                label="Clear All"
                onClick={clearAll}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ToDo;