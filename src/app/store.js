import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

const loadState = () => {
  try {
    const data = localStorage.getItem("todos");
    return data ? JSON.parse(data) : undefined;
  } catch {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    localStorage.setItem("todos", JSON.stringify(state));
  } catch {}
};

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});