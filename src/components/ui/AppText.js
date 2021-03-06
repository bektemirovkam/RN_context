import React from "react";
import { Text, StyleSheet } from "react-native";

export const AppText = ({ children, style }) => {
  return <Text style={{ ...styles.text, ...style }}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "roboto-regular",
    color: "#fff",
  },
});
