import { Actions } from "./actions";

export const initialValue = {
  todos: ["Default"],
};

export type TodosContextType = typeof initialValue;

function reducer(state: TodosContextType, action: any) {
  switch (action.type) {
    case Actions.addTodo: {
      const newTodos = [...state.todos];
      newTodos.push(action.payload);
      return { ...state, todos: newTodos };
    }

    case Actions.removeTodo: {
      return {
        ...state,
        todos: [...state.todos].filter((todo) => todo !== action.payload),
      };
    }
    default:
      return state;
  }
}

export default reducer;
