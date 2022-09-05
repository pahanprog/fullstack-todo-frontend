import React, { useContext, useEffect, useRef, useState } from "react";
import { TodosContext } from "../../contexts/TodosContext";
import TextInput from "../TextInput";
import "./styles.css";

const CreateTaskModal = () => {
  const { addTodo } = useContext(TodosContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    username: "",
    description: "",
  });

  const emailExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;

  const handleModalToggle = () => {
    if (modalOpen) {
      emailRef.current!.value = "";
      descriptionRef.current!.value = "";
      usernameRef.current!.value = "";
      setErrors({ email: "", username: "", description: "" });
    }
    setModalOpen((oldValue) => !oldValue);
  };

  const emailRef = useRef<HTMLInputElement | null>();
  const usernameRef = useRef<HTMLInputElement | null>();
  const descriptionRef = useRef<HTMLTextAreaElement | null>();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let flag = false;
    if (!usernameRef.current) return;
    if (!emailRef.current) return;
    if (!descriptionRef.current) return;

    if (usernameRef.current?.value === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "Field is required!",
      }));
      flag = true;
    }

    if (descriptionRef.current?.value === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        description: "Field is required!",
      }));
      flag = true;
    }

    if (emailRef.current?.value === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Field is required!",
      }));
      flag = true;
    } else if (!emailExp.test(emailRef.current.value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Not a valid email",
      }));
      flag = true;
    }

    if (flag) return;

    addTodo({
      email: emailRef.current.value,
      description: descriptionRef.current.value,
      username: usernameRef.current.value,
    });

    handleModalToggle();
  };

  const handleModalClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      handleModalToggle();
    }
  };

  return (
    <>
      <button onClick={handleModalToggle}>Create new task</button>
      <div
        className={`modal ${modalOpen ? "open" : "closed"}`}
        onClick={handleModalClick}
      >
        <div className="create_task_container">
          <h2>Create a task</h2>
          <form onSubmit={onSubmit}>
            <TextInput
              id="email"
              placeholder="Email"
              error={errors.email}
              setRef={(input) => (emailRef.current = input)}
              onChange={() =>
                setErrors((prevErrors) => ({ ...prevErrors, email: "" }))
              }
            />
            <TextInput
              id="username"
              placeholder="Username"
              error={errors.username}
              setRef={(input) => (usernameRef.current = input)}
              onChange={() =>
                setErrors((prevErrors) => ({ ...prevErrors, username: "" }))
              }
            />
            <TextInput
              id="task"
              placeholder="Describe task"
              label="Task description"
              error={errors.description}
              textarea
              setRef={(input) => (descriptionRef.current = input)}
              onChange={() =>
                setErrors((prevErrors) => ({ ...prevErrors, description: "" }))
              }
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateTaskModal;
