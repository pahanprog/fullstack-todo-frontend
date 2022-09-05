import React, { useContext } from "react";
import { TodosContext } from "../../contexts/TodosContext";
import { updateTodoState } from "../../controllers/todo";
import "./styles.css";

interface Props {
  id: number;
  complete: boolean;
}

const StatusIcon = ({ id, complete }: Props) => {
  const { updateTodoTest } = useContext(TodosContext);
  const handleClick = async () => {
    if (!localStorage.getItem("token")) {
      return;
    }

    const result = await updateTodoState({ id });

    if (result) {
      updateTodoTest({ id });
    }
  };

  return (
    <div className="todo_status_container" onClick={handleClick}>
      {complete && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#00AD83"
          className="bi bi-check-lg"
          viewBox="0 0 16 16"
        >
          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
        </svg>
      )}
    </div>
  );
};

export default StatusIcon;
