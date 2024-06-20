"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import reducer, { TodosContextType, initialValue } from "./reducer";

const getInitialState = () => {
  const localData = localStorage.getItem("localData");
  return localData ? JSON.parse(localData) : initialValue;
};

type Context = {
  state: TodosContextType;
  dispatch: React.Dispatch<any>;
};

export const ContextProvider = createContext<Context>({} as Context);

const TodoContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer<React.Reducer<TodosContextType, any>>(
    reducer,
    getInitialState()
  );

  useEffect(() => {
    localStorage.setItem("localData", JSON.stringify(state));
  }, [state]);

  const providerValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <ContextProvider.Provider value={providerValue}>
      {children}
    </ContextProvider.Provider>
  );
};

export const useTodo = () => useContext(ContextProvider);

export default TodoContextProvider;
