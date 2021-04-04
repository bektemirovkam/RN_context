import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { EditModal } from "../components/EditModal";
import { AppCard } from "../components/ui/AppCard";
import { THEME } from "../theme";
import { AppTextBold } from "./../components/ui/AppTextBold";
import { AppButton } from "./../components/ui/AppButton";
import { TodoContext } from "./../context/todo/todoContext";
import { ScreenContext } from "./../context/screens/screenContext";

export const TodoScreen = () => {
  const { removeTodo, updateTodo, todos } = useContext(TodoContext);
  const { changeScreen, todoId } = useContext(ScreenContext);

  const [modal, setModal] = useState(false);

  const todo = todos.find((t) => t.id === todoId);

  const handleUpdate = (text) => {
    updateTodo(todo.id, text);
    setModal(false);
  };

  return (
    <AppCard style={styles.wrapper}>
      <EditModal
        visible={modal}
        onCancel={() => setModal(false)}
        value={todo.text}
        updateTodo={handleUpdate}
      />
      <View style={styles.content}>
        <AppTextBold style={styles.text}>{todo.text}</AppTextBold>
        <AntDesign.Button
          onPress={() => {
            setModal(true);
          }}
          name="edit"
          color="white"
          size={24}
        ></AntDesign.Button>
      </View>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <AppButton onPress={() => changeScreen(null)}>
            <AntDesign name="back" size={24} color="white" />
          </AppButton>
        </View>
        <View style={styles.button}>
          <AppButton
            color={THEME.DANGER_COLOR}
            onPress={() => {
              removeTodo(todo.id);
            }}
          >
            <AntDesign name="delete" size={24} color="white" />
          </AppButton>
        </View>
      </View>
    </AppCard>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    maxWidth: "60%",
    flexGrow: 1,
    color: "#000",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    flexBasis: "40%",
  },
});
