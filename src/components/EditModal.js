import React, { useState } from "react";
import { Modal, View, StyleSheet, TextInput } from "react-native";
import { THEME } from "../theme";
import { AppButton } from "./ui/AppButton";

export const EditModal = ({ visible, onCancel, value, updateTodo }) => {
  const [text, setText] = useState(value);

  const handlerCancel = () => {
    setText(value);
    onCancel();
  };

  return (
    <Modal animationType="slide" transparent={false} visible={visible}>
      <View style={styles.wrapper}>
        <TextInput style={styles.input} value={text} onChangeText={setText} />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <AppButton onPress={handlerCancel} color={THEME.DANGER_COLOR}>
              Отменить
            </AppButton>
          </View>
          <View style={styles.button}>
            <AppButton
              color={THEME.PRIMARY_COLOR}
              onPress={() => updateTodo(text)}
            >
              Сохранить
            </AppButton>
          </View>
        </View>
      </View>
    </Modal>
  );
};
// TODO: стилизация модального окна
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    padding: 20,
  },
  input: {
    borderStyle: "solid",
    borderColor: THEME.MAIN_COLOR,
    borderBottomWidth: 1,
    width: "70%",
    padding: 10,
    marginBottom: 20,
  },
});
