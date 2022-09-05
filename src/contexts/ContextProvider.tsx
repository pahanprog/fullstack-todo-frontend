import React from "react";
import FiltersProvider from "./FiltersContext";
import TodosProvider from "./TodosContext";
import UserProvider from "./UserContext";

interface Props {
  children?: React.ReactNode;
}

const ContextProvider = ({ children }: Props) => {
  return (
    <UserProvider>
      <FiltersProvider>
        <TodosProvider>{children}</TodosProvider>
      </FiltersProvider>
    </UserProvider>
  );
};

export default ContextProvider;
