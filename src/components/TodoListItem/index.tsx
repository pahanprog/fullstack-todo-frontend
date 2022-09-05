import React, { useContext } from "react";
import { TodosContext } from "../../contexts/TodosContext";
import { TodoItem } from "../../types";
import { getDay, getMonth, getTime } from "../../utils/getDate";
import StatusIcon from "../StatusIcon";
import "./styles.css";

const TodoListItem = ({
  complete,
  createdAt,
  description,
  email,
  id,
  username,
  edited,
}: TodoItem) => {
  const { selectedTodoId, setSelectedTodoId } = useContext(TodosContext);

  const handleItemCLick = () => {
    if (selectedTodoId !== id) {
      setSelectedTodoId(id);
    }
  };

  return (
    <li
      className={`todo_list_item ${selectedTodoId === id ? "selected" : ""}`}
      onClick={handleItemCLick}
    >
      <div className="todo_item_header">
        <StatusIcon id={id} complete={complete} />
        <div>
          {getMonth(createdAt)} {getDay(createdAt)}, {getTime(createdAt)}
        </div>
      </div>
      <div className="executor_info_container">
        <div className="executor_text">Executor:</div>
        <div className="executor_info">
          <div>{username}</div>
          <div>{email}</div>
        </div>
      </div>
      <div className="task">
        <p>Task</p>
        {description}
      </div>
      <div className="edit">{edited ? "Edited by admin" : ""}</div>
    </li>
  );
};

export default TodoListItem;
