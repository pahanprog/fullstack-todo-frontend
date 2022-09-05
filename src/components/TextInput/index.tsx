import React from "react";
import "./styles.css";

interface Props {
  id: string;
  placeholder: string;
  label?: string;
  textarea?: boolean;
  value?: string;
  onChange?: (e: any) => void;
  setRef?: (ref: any) => void;
  error?: string;
  hidden?: boolean;
}

const TextInput = ({
  id,
  placeholder,
  label,
  onChange,
  textarea,
  value,
  setRef,
  error,
  hidden,
}: Props) => {
  return (
    <div className="input_container">
      <label htmlFor={id}>{label ? label : placeholder}</label>
      <div className="input_error">{error}</div>
      {textarea ? (
        <textarea
          className={error ? "error" : ""}
          ref={setRef}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          className={error ? "error" : ""}
          ref={setRef}
          type={hidden ? "password" : "text"}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default TextInput;
