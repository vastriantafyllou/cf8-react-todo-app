export type ToDoProps = {
  id: number;
  text: string
  completed: boolean;
}

export type ToDoFormProps = {
  addToDo: (text: string) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
}

export type ToDoListProps = {
  todos: ToDoProps[];
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
  toggleTodo: (id: number) => void;
}

export type ToDoStatsProps = {
  total: number;
  active: number;
  completed: number;
}

export type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  label: string;
  addClasses?: string;
}

export type IconButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  icon: React.ReactNode;
  addClasses?: string;
}

