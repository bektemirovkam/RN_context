import React, { useContext, useReducer } from "react";
import { TodoContext } from "./todoContext";
import { todoReducer } from "./todoReducer";
import {
  ADD_TODO,
  REMOVE_TODO,
  SHOW_LOADER,
  UPDATE_TODO,
  HIDE_LOADER,
  SHOW_ERROR,
  CLEAN_ERROR,
  FETCH_TODOS,
} from "./../types";
import { ScreenContext } from "./../screens/screenContext";
import { Alert } from "react-native";
import { Http } from "../../http";

export const TodoState = ({ children }) => {
  const { changeScreen } = useContext(ScreenContext);

  const initialState = {
    todos: [],
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = async (text) => {
    cleanError();
    try {
      const data = await Http.post(
        "https://rn-todo-3c625-default-rtdb.firebaseio.com/todos.json",
        JSON.stringify({ text })
      );
      dispatch({
        type: ADD_TODO,
        id: data.name,
        text,
      });
    } catch (error) {
      showError("Ошибка при добавлении");
    }
  };

  const updateTodo = async (id, text) => {
    showLoader();
    cleanError();
    try {
      await Http.patch(
        `https://rn-todo-3c625-default-rtdb.firebaseio.com/todos/${id}.json`,
        JSON.stringify({ text })
      );

      dispatch({
        type: UPDATE_TODO,
        id,
        text,
      });
    } catch (error) {
      showError("Ошибка при редактировании");
    } finally {
      hideLoader();
    }
  };

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
          onPress: async () => {
            try {
              showLoader();
              cleanError();

              await Http.delete(
                `https://rn-todo-3c625-default-rtdb.firebaseio.com/todos/${id}.json`
              );

              changeScreen(null);
              dispatch({
                type: REMOVE_TODO,
                id,
              });
            } catch (error) {
              showError("Ошибка при удалении");
            } finally {
              hideLoader();
            }
          },
        },
      ]
    );
  };

  const showLoader = () => {
    dispatch({
      type: SHOW_LOADER,
    });
  };

  const hideLoader = () => {
    dispatch({
      type: HIDE_LOADER,
    });
  };

  const showError = (error) => {
    dispatch({
      type: SHOW_ERROR,
      error,
    });
  };

  const cleanError = () => {
    dispatch({
      type: CLEAN_ERROR,
    });
  };

  const fetchTodos = async () => {
    showLoader();
    cleanError();
    try {
      const data = await Http.get(
        "https://rn-todo-3c625-default-rtdb.firebaseio.com/todos.json"
      );
      if (data) {
        dispatch({
          type: FETCH_TODOS,
          todos: Object.keys(data).map((key) => ({ ...data[key], id: key })),
        });
      }
    } catch (error) {
      showError("Что то пошло не так...");
    } finally {
      hideLoader();
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        loading: state.loading,
        error: state.error,
        updateTodo,
        addTodo,
        removeTodo,
        fetchTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
