import { FC } from "react";
import Todo from "./Todo";
import { TodoType } from "../types/types";

type TodoListProps = {
  todos: TodoType[];
  deleteTodo: (id: string) => void;
}

const TodoList: FC<TodoListProps> = ({todos, deleteTodo}) => {
  return (
    <div>
      <ol className="padding-0">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </ol>
    </div>
  )
}

export default TodoList