import React from "react";
import { Text, StyleSheet } from "react-native";

export const AppTextBold = ({ children, style }) => {
  return <Text style={{ ...styles.text, ...style }}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "roboto-bold",
    color: "#fff",
  },
});
