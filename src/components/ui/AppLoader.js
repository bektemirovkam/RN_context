import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { THEME } from "../../theme";

export const AppLoader = () => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator color={THEME.MAIN_COLOR} size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
