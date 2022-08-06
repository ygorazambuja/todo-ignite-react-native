import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { v4 } from "uuid";
import { Badge } from "../components/Badge";
import { Header } from "../components/Header";
import { NoContent } from "../components/NoContent";
import { PlusIcon } from "../components/PlusIcon";
import { TextField } from "../components/TextField";
import { TodoItem } from "../components/TodoItem";
import { blue, purple } from "../styles/theme";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    setTodos([...todos, { id: v4(), text: text, completed: false }]);

    setText("");
  };

  const removeTodo = (key: string) => {
    setTodos(todos.filter((todo) => todo.id !== key));
  };

  const toggleTodo = (key: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === key) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const concluedTodos = todos.filter((todo) => todo.completed);

  return (
    <ScrollView style={{ backgroundColor: "#1A1A1A", flex: 1 }}>
      <Header />
      <View style={styles.insertionContainer}>
        <TextField value={text} onChangeText={(text) => setText(text)} />
        <PlusIcon onPress={addTodo} />
      </View>

      <View style={styles.informationsContainer}>
        <View style={styles.informationContainer}>
          <Text style={styles.createdText}>Criadas</Text>
          <Badge value={todos.length} />
        </View>
        <View style={styles.informationContainer}>
          <Text style={styles.completedText}>Concluídas</Text>
          <Badge value={concluedTodos.length} />
        </View>
      </View>

      {todos.length === 0 && <NoContent />}

      {todos.length > 0 &&
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onConclued={toggleTodo}
            onRemove={removeTodo}
          />
        ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  insertionContainer: {
    flexDirection: "row",
    marginTop: -26,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  informationsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    paddingVertical: 16,
  },
  informationContainer: {
    flexDirection: "row",
  },
  createdText: {
    color: blue,
    fontWeight: "bold",
  },
  completedText: {
    color: purple,
    fontWeight: "bold",
  },
});
