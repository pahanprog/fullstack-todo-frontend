import React, { useContext, useEffect, useState } from "react";
import { TodosContext } from "../../contexts/TodosContext";
import { TodoItem } from "../../types";
import { getDay, getMonth, getTime } from "../../utils/getDate";
import StatusIcon from "../StatusIcon";
import TaskDescriptionEdit from "../TaskDescriptionEdit";
import "./styles.css";

const SelectedTask = () => {
  const { selectedTodoId, todos } = useContext(TodosContext);
  const [todo, setTodo] = useState<TodoItem>();

  useEffect(() => {
    const todoBasedOnSelectedId = todos.find(
      (todo) => todo.id === selectedTodoId
    );

    if (todoBasedOnSelectedId) {
      setTodo(todoBasedOnSelectedId);
    }
  }, [selectedTodoId]);

  const isEditable = localStorage.getItem("token") !== null;

  if (!todo) {
    return <div></div>;
  }

  return (
    <div className="selected_task_container">
      <div className="todo_item_header">
        <StatusIcon id={todo.id} complete={todo.complete} />
        <div>
          {getMonth(todo.createdAt)} {getDay(todo.createdAt)},{" "}
          {getTime(todo.createdAt)}
        </div>
      </div>
      <div className="executor_info_container">
        <div className="executor_text">Executor:</div>
        <div className="executor_info">
          <div>{todo.username}</div>
          <div>{todo.email}</div>
        </div>
      </div>
      <div className="task">
        <p>Task</p>
        {isEditable ? (
          <TaskDescriptionEdit initialValue={todo.description} />
        ) : (
          todo.description
        )}
      </div>
    </div>
  );
};

export default SelectedTask;
