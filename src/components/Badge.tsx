import { StyleSheet, Text, View } from "react-native";
import { gray200, gray400 } from "../styles/theme";

type BadgeProps = {
  value: number | string;
};

export function Badge({ value }: BadgeProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.badgeText}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: gray400,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
    borderRadius: 8,
    paddingVertical: 1,
    paddingHorizontal: 6,
  },
  badgeText: {
    color: gray200,
    fontWeight: "bold",
    fontSize: 12,
  },
});
