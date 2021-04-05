import React, { useContext, useEffect, useCallback } from "react";
import { View, FlatList, StyleSheet, Image } from "react-native";
import { AddForm } from "./../components/AddTodo";
import { Todo } from "./../components/Todo";
import { TodoContext } from "./../context/todo/todoContext";
import { ScreenContext } from "./../context/screens/screenContext";
import { AppLoader } from "../components/ui/AppLoader";
import { AppText } from "../components/ui/AppText";
import { AppButton } from "../components/ui/AppButton";
import { THEME } from "../theme";

export const MainScreen = () => {
  const { addTodo, removeTodo, todos, fetchTodos, loading, error } = useContext(
    TodoContext
  );
  const { changeScreen } = useContext(ScreenContext);

  const loadTodos = useCallback(async () => {
    await fetchTodos();
  }, [fetchTodos]);

  useEffect(() => {
    loadTodos();
  }, []);

  if (loading) {
    return <AppLoader />;
  }

  if (error) {
    return (
      <View style={styles.error}>
        <AppText style={styles.errorText}>{error}</AppText>
        <AppButton color={THEME.PRIMARY_COLOR} onPress={loadTodos}>
          Попробовать снова
        </AppButton>
      </View>
    );
  }

  let content = (
    <FlatList
      style={styles.list}
      data={todos}
      renderItem={({ item }) => (
        <Todo removeTodo={removeTodo} todo={item} changeScreen={changeScreen} />
      )}
      keyExtractor={(item) => item.id}
    />
  );

  if (todos.length === 0) {
    content = (
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../../assets/no-items.png")}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <AddForm onSubmit={addTodo} />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  list: {
    paddingRight: 10,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height: 300,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  error: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  errorText: {
    color: THEME.DANGER_COLOR,
    fontSize: 20,
  },
});
