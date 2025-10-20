import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MenuItem } from "../types/MenuItem";

interface Props {
  item: MenuItem;
}

export default function MenuItemCard({ item }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.course}>{item.course}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>R {item.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    borderColor: "#DAA520",
    borderWidth: 1,
    marginBottom: 10,
  },
  name: { fontSize: 18, fontWeight: "bold", color: "#8B7500" },
  course: { fontStyle: "italic", color: "#DAA520" },
  description: { marginTop: 5, color: "#555" },
  price: { marginTop: 5, fontWeight: "bold", color: "#8B0000" },
});
