import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { TodoItem, TodoItemPartial } from "../types";

export const FiltersContext = createContext({} as FiltersContextProps);

interface FiltersContextProps {
  sortDirection: "ASC" | "DESC";
  keywords: string;
  complete: boolean;
  toggleComplete: () => void;
  changeKeywords: (keywords: string) => void;
  toggleSortDirection: () => void;
}

interface Props {
  children?: React.ReactNode;
}

const FiltersProvider = ({ children }: Props) => {
  const [sortDirection, setSortDirection] = useState<"ASC" | "DESC">("DESC");
  const [keywords, setKeywords] = useState("");
  const [complete, setComplete] = useState(false);

  const changeKeywords = (keywords: string) => {
    setKeywords(keywords);
  };

  const toggleSortDirection = () => {
    setSortDirection((prevDirection) =>
      prevDirection === "DESC" ? "ASC" : "DESC"
    );
  };

  const toggleComplete = () => {
    setComplete((prevValue) => !prevValue);
  };

  return (
    <FiltersContext.Provider
      value={{
        sortDirection,
        keywords,
        complete,
        toggleComplete,
        changeKeywords,
        toggleSortDirection,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersProvider;
