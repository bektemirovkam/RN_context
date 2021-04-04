import React, { useContext, useReducer } from "react";
import { TodoContext } from "./todoContext";
import { todoReducer } from "./todoReducer";
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "./../types";
import { ScreenContext } from "./../screens/screenContext";
import { Alert } from "react-native";

export const TodoState = ({ children }) => {
  const { changeScreen } = useContext(ScreenContext);

  const initialState = {
    todos: [
      { id: "1", text: "Learn React JS" },
      { id: "2", text: "Learn Vue Js" },
      { id: "3", text: "Learn Node JS" },
    ],
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (text) => {
    dispatch({
      type: ADD_TODO,
      text,
    });
  };

  const updateTodo = (id, text) =>
    dispatch({
      type: UPDATE_TODO,
      id,
      text,
    });

  const removeTodo = (id) => {
    const todo = state.todos.find((t) => t.id === id);
    Alert.alert(
      "Удаление задачи",
      `Вы действительно хотите удалить задачу ${todo.text} ?`,
      [
        {
          text: "Отмена",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            changeScreen(null);
            dispatch({
              type: REMOVE_TODO,
              id,
            });
          },
        },
      ]
    );
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        updateTodo,
        addTodo,
        removeTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
