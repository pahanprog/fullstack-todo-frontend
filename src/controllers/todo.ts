import axios from "axios";
import { TodoItem } from "../types";

const getTodos = async (
  page: number,
  parameters: {
    usernameOrEmail: string;
    complete: boolean;
    order: "DESC" | "ASC";
  }
) => {
  const { data } = await axios({
    method: "post",
    url: "/todo",
    data: {
      page: page,
      parameters: {
        usernameOrEmail: parameters.usernameOrEmail,
        complete: parameters.complete,
        order: parameters.order,
      },
    },
  });

  return {
    todos: data.todos.map(
      (todo: any) =>
        ({
          id: todo.id,
          complete: todo.complete,
          createdAt: new Date(todo.createdAt),
          description: todo.description,
          email: todo.email,
          username: todo.username,
          edited: todo.edited,
        } as TodoItem)
    ) as TodoItem[],
    todosCount: data.todoCount,
  };
};

const createTodo = async (todo: {
  email: string;
  username: string;
  description: string;
}) => {
  const { data } = await axios({
    method: "post",
    url: "/todo/create",
    data: { ...todo },
  });

  return {
    id: data.id,
    complete: data.complete,
    createdAt: new Date(data.createdAt),
    description: data.description,
    email: data.email,
    username: data.username,
    edited: false,
  } as TodoItem;
};

const editTodo = async (todo: { id: number; newDesctiption: string }) => {
  const { data } = await axios({
    method: "post",
    url: "/todo/edit",
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    data: {
      id: todo.id,
      description: todo.newDesctiption,
    },
  });

  return data;
};

const updateTodoState = async (todo: { id: number }) => {
  const { data } = await axios({
    method: "post",
    url: "/todo/update",
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    data: {
      id: todo.id,
    },
  });

  return data;
};

export { getTodos, createTodo, editTodo, updateTodoState };
