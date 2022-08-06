import { StyleSheet, Text, View } from "react-native";
import Clipboard from "../../assets/icons/Clipboard.svg";
import { gray200 } from "../styles/theme";
export function NoContent() {
  return (
    <View style={styles.container}>
      <Clipboard></Clipboard>
      <Text style={styles.textBold}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.regularText}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  textBold: {
    marginTop: 12,
    fontWeight: "bold",
    color: gray200,
  },
  regularText: {
    marginTop: 4,
    fontWeight: "normal",
    color: gray200,
  },
});
