import React, { useContext, useState } from "react";
import { View, Alert } from "react-native";
import { Navbar } from "./components/Navbar";
import { MainScreen } from "./screens/MainScreen";
import { TodoScreen } from "./screens/TodoScreen";
import { ScreenContext } from "./context/screens/screenContext";

export const MainLayout = () => {
  const { todoId } = useContext(ScreenContext);
  return (
    <View>
      <Navbar />
      {todoId ? <TodoScreen /> : <MainScreen />}
    </View>
  );
};
