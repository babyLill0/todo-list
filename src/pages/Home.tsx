import { FC, FormEvent, useEffect, useId, useState } from "react";

//Components
import Container from "../components/Container";
import Input from "../components/Input";
import Button from "../components/Button";

import TodoCard from "../components/TodoCard";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/types";
import nextId from "react-id-generator";

const Home: FC = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [newTodo, setNewTodo] = useState<TodoType | null>(null);

  function handleInputChange (e: FormEvent<HTMLInputElement>) {
    const todoId = nextId("todo-");
    setNewTodo({
      id: todoId,
      description: e.currentTarget.value,
    });
  }

  function addTodo() {
    if (!newTodo) return;

    setTodos(prev => [...prev, newTodo]);
    setNewTodo(null);
  }

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }

  
  return (
    <Container>
      <TodoCard >
        <Input 
          label='Add a new task' 
          buttonComponent={
            <Button
              onClick={addTodo}
            >
              Add
            </Button>
          }
          onChange={handleInputChange}
          value={newTodo?.description}
        />
      </TodoCard>
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
      />
    </Container>
  );
}

export default Home;