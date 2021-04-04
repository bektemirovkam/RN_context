import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { THEME } from "./../theme";

export const Todo = ({ todo, removeTodo, changeScreen }) => {
  const handleRemove = () => {
    removeTodo(todo.id);
  };
  const handleSelect = () => {
    changeScreen(todo.id);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.wrapper}
      onLongPress={handleRemove}
      onPress={handleSelect}
    >
      <Text>{todo.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: THEME.MAIN_COLOR,
    borderRadius: 5,
    marginBottom: 10,
  },
});
