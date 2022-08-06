import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import Plus from "../../assets/icons/plus.svg";
import { blueDark } from "../styles/theme";

export function PlusIcon({ ...props }: TouchableOpacityProps) {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Plus />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 52,
    width: 52,
    backgroundColor: blueDark,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginLeft: 4,
  },
});
