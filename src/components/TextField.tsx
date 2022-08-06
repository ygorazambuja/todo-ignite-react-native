import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { gray300, gray500 } from "../styles/theme";

type TextFieldProps = {} & TextInputProps;

export function TextField({ ...props }: TextFieldProps) {
  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={styles.input}
        placeholder="Adicione uma nova Tarefa"
        placeholderTextColor={gray300}
        value={props.value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gray500,
    height: 54,
    justifyContent: "center",
    borderRadius: 8,
  },
  input: {
    padding: 12,
    fontSize: 16,
    color: gray300,
  },
});
