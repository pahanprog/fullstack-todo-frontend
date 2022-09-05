import React, { useContext, useEffect } from "react";
import { TodosContext } from "../../contexts/TodosContext";
import { getDay, getMonth, getTime } from "../../utils/getDate";
import TodoListItem from "../TodoListItem";

const TodoList = () => {
  const { todos } = useContext(TodosContext);

  return (
    <div style={{ flex: 1, width: "100%" }}>
      <ul>
        {todos.map((todo) => (
          <TodoListItem {...todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
