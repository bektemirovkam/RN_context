import React, { useState } from "react";
import { View, TextInput, StyleSheet, Alert, Keyboard } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { THEME } from "./../theme";
import { AppButton } from "./ui/AppButton";

export const AddForm = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
      Keyboard.dismiss();
    } else {
      Alert.alert("Значение не может быть пустым!");
    }
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
      <AntDesign.Button name="pluscircleo" onPress={handleSubmit}>
        Добавить
      </AntDesign.Button>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  input: {
    borderStyle: "solid",
    borderColor: THEME.MAIN_COLOR,
    borderBottomWidth: 1,
    width: "70%",
  },
});
