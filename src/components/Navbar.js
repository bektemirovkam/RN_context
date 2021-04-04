import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Navbar = (props) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.navbar_text}>Todo App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 80,
    backgroundColor: "#0c2833",
    justifyContent: "center",
    alignItems: "center",
  },
  navbar_text: {
    color: "white",
    fontSize: 24,
  },
});
