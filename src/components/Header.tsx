import { StyleSheet, View } from "react-native";
import { backgroundColor } from "../styles/theme";
import { Logo } from "./Logo";

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo></Logo>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: backgroundColor,
  },
  logo: {
    padding: 12,
    marginVertical: 40,
  },
});
