import {useState} from "react";
import type {ToDoFormProps} from "../../types.ts";
import Button from "../ui/Button.tsx";

const ToDoForm = ({addToDo, inputRef}:ToDoFormProps) => {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() !== "") {
      addToDo(text);
      setText("");
      inputRef.current?.focus();
    }
  }

  return (
    <>
      <form className="flex gap-4 mb-4" onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          value={text}
          onChange={handleChange}
          className="flex-1 border p-2 rounded"
          placeholder="New task..."
        />
        <Button label="Add"/>
      </form>
    </>
  )
}

export default ToDoForm;