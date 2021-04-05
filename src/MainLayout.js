import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Navbar } from "./components/Navbar";
import { MainScreen } from "./screens/MainScreen";
import { TodoScreen } from "./screens/TodoScreen";
import { ScreenContext } from "./context/screens/screenContext";

export const MainLayout = () => {
  const { todoId } = useContext(ScreenContext);
  return (
    <View style={styles.wrapper}>
      <Navbar />
      <View style={styles.content}>
        {todoId ? <TodoScreen /> : <MainScreen />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
  },
  content: {
    flex: 1,
  },
});
