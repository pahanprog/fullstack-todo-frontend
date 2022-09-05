import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createTodo, getTodos } from "../controllers/todo";
import { TodoItem, TodoItemPartial } from "../types";
import { FiltersContext } from "./FiltersContext";

export const TodosContext = createContext({} as TodosContextProps);

interface TodosContextProps {
  todos: TodoItem[];
  currentPage: number;
  selectedTodoId: number;
  maxPage: number;
  setSelectedTodoId: (id: number) => void;
  setCurrentPage: (page: number) => void;
  addTodo: (todo: {
    email: string;
    username: string;
    description: string;
  }) => void;
  updateTodoDescription: (todo: { id: number; description: string }) => void;
  updateTodoTest: (todo: { id: number }) => void;
}

interface Props {
  children?: React.ReactNode;
}

const TodosProvider = ({ children }: Props) => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [selectedTodoId, setSelectedTodoId] = useState<number>(-1);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [maxPage, setMaxPage] = useState<number>(0);

  const { keywords, complete, sortDirection } = useContext(FiltersContext);

  useEffect(() => {
    const onRender = async () => {
      const result = await getTodos(currentPage, {
        usernameOrEmail: keywords,
        complete,
        order: sortDirection,
      });

      setTodos(result.todos);
      setMaxPage(Math.ceil(result.todosCount / 3));
    };

    onRender();
  }, [keywords, complete, currentPage, sortDirection]);

  useEffect(() => {
    if (selectedTodoId === -1 && todos[0]) {
      setSelectedTodoId(todos[0].id);
    }
  }, [todos]);

  useEffect(() => {
    setSelectedTodoId(-1);
  }, [currentPage]);

  const addTodo = async (todo: {
    email: string;
    username: string;
    description: string;
  }) => {
    if (todos.length === 3 && maxPage === 1) {
      setMaxPage(2);
    }
    const result = await createTodo(todo);
    setTodos((prevTodos) => [result].concat(prevTodos.slice(0, 2)));
    setSelectedTodoId(result.id);
  };

  const updateTodoDescription = (todoToUpdate: {
    id: number;
    description: string;
  }) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === todoToUpdate.id) {
          todo.description = todoToUpdate.description;
          todo.edited = true;
          return todo;
        }
        return todo;
      })
    );
  };

  const updateTodoTest = (todoToUpdate: { id: number }) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === todoToUpdate.id) {
          todo.complete = true;
          return todo;
        }
        return todo;
      })
    );
  };

  return (
    <TodosContext.Provider
      value={{
        todos,
        currentPage,
        selectedTodoId,
        maxPage,
        setSelectedTodoId,
        setCurrentPage,
        addTodo,
        updateTodoDescription,
        updateTodoTest,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
