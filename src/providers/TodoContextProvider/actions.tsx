export enum Actions {
  addTodo = "addTodo",
  removeTodo="removeTodo"
}

export const addTodo = (text: string) => ({
  type: Actions.addTodo,
  payload: text,
});

export const removeTodo = (text: string) => ({
  type: Actions.removeTodo,
  payload: text,
});

