import React, { useContext, useEffect, useState } from "react";
import { TodosContext } from "../../contexts/TodosContext";
import { editTodo } from "../../controllers/todo";
import TextInput from "../TextInput";
import "./styles.css";

interface Props {
  initialValue: string;
}

const TaskDescriptionEdit = ({ initialValue }: Props) => {
  const { selectedTodoId, updateTodoDescription } = useContext(TodosContext);
  const [descripption, setDescription] = useState(initialValue);
  const [descripptionError, setDescriptionError] = useState("");

  useEffect(() => {
    setDescription(initialValue);
  }, [initialValue]);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (descripptionError) {
      setDescriptionError("");
    }
    setDescription(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = selectedTodoId;
    const newDesctiption = descripption;

    if (!newDesctiption) {
      setDescriptionError("Field is required!");
      return;
    }

    const result = await editTodo({
      id,
      newDesctiption,
    });

    console.log({ result });

    if (result !== "Not authenticated") {
      updateTodoDescription({ id: id, description: newDesctiption });
    } else {
      alert(result);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <TextInput
        id="task"
        placeholder="New task"
        label="Task description"
        textarea
        value={descripption}
        onChange={onChange}
        error={descripptionError}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TaskDescriptionEdit;
