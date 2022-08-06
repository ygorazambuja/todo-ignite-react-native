import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { blue, gray200, gray300, gray500, purple } from "../styles/theme";

import Check from "../../assets/icons/check.svg";
import Trash from "../../assets/icons/trash.svg";
type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

type TodoItemProps = {
  todo: Todo;
  onConclued: (id: string) => void;
  onRemove: (id: string) => void;
};

export function TodoItem({ todo, onConclued, onRemove }: TodoItemProps) {
  return (
    <View style={styles.container}>
      <View style={[styles.radioContainer]}>
        <TouchableOpacity
          onPress={() => {
            onConclued(todo.id);
          }}
        >
          {!todo.completed && (
            <View
              style={[
                styles.radio,
                { backgroundColor: todo.completed ? purple : gray500 },
                {
                  borderColor: todo.completed ? purple : blue,
                },
              ]}
            />
          )}
          {todo.completed && <Check></Check>}
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.text,
            {
              textDecorationLine: todo.completed ? "line-through" : "none",
              color: todo.completed ? gray300 : gray200,
            },
          ]}
        >
          {todo.text}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.iconTrash}
        onPress={() => onRemove(todo.id)}
      >
        <Trash />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 64,
    backgroundColor: gray500,
    marginVertical: 4,
    marginHorizontal: 18,
    borderRadius: 8,
  },
  radioContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  radio: {
    height: 16,
    width: 16,
    borderRadius: 12,
    borderWidth: 2,
    backgroundColor: gray500,
    padding: 2,
    color: "#fff",
  },
  textContainer: {
    flex: 4,
  },
  text: {
    fontSize: 16,
    color: "white",
    paddingVertical: 12,
  },
  iconTrash: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
