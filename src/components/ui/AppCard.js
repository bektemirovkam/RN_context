import React from "react";
import { View, StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const AppCard = (props) => {
  return (
    <View style={{ ...styles.default, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  default: {
    borderRadius: 10,
    elevation: 8,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: THEME.MAIN_COLOR,
    padding: 20,
  },
});
