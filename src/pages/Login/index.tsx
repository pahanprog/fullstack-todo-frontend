import React, { useRef, useState } from "react";
import TextInput from "../../components/TextInput";
import { login } from "../../controllers/auth";
import "./styles.css";

const Login = () => {
  const usernameOrEmailRef = useRef<HTMLInputElement | null>();
  const passwordRef = useRef<HTMLInputElement | null>();

  const [errors, setErrors] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!passwordRef.current) return;
    if (!usernameOrEmailRef.current) return;
    let flag = false;

    if (usernameOrEmailRef.current.value === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        usernameOrEmail: "Field is required!",
      }));
      flag = true;
    }

    if (passwordRef.current.value === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Field is required!",
      }));
      flag = true;
    }

    if (flag) return;

    const result = await login({
      usernameOrEmail: usernameOrEmailRef.current.value,
      password: passwordRef.current.value,
    });

    if (result) {
      result.forEach((error: any) => {
        if (error.param === "usernameOrEmail") {
          setErrors((prevErrors) => ({
            ...prevErrors,
            usernameOrEmail: error.message,
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            password: error.message,
          }));
        }
      });
    }
  };

  return (
    <div className="login_page">
      <div className="login_container">
        <h2>Sign in</h2>
        <form onSubmit={onSubmit}>
          <TextInput
            id="username"
            placeholder="Username or email"
            error={errors.usernameOrEmail}
            setRef={(input) => (usernameOrEmailRef.current = input)}
            onChange={() => {
              setErrors((prevErrors) => ({
                ...prevErrors,
                usernameOrEmail: "",
              }));
            }}
          />
          <TextInput
            id="password"
            placeholder="Password"
            error={errors.password}
            setRef={(input) => (passwordRef.current = input)}
            hidden={true}
            onChange={() => {
              setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
            }}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
