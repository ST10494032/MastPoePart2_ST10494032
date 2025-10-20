import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { MenuItem } from "../types/MenuItem";
import MenuItemCard from "../components/MenuItemCard";
import { useNavigation } from "@react-navigation/native";

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

const HomeScreen: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleAddItem = (newItem: MenuItem) => {
    setMenuItems([...menuItems, newItem]);
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // can refresh or update later if needed
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Menu</Text>
      <Text style={styles.subtitle}>Total Dishes: {menuItems.length}</Text>

      {menuItems.length === 0 ? (
        <Text style={styles.emptyText}>No menu items yet. Add your first dish below!</Text>
      ) : (
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MenuItemCard item={item} />}
        />
      )}

      <View style={styles.buttonContainer}>
        <Button
          title="Add Menu Item"
          color="#DAA520"
          onPress={() => (navigation as any).navigate("AddItem", { setMenuItems, menuItems })}
        />
      </View>
    </View>
  );
}
export default HomeScreen;


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF8DC", padding: 16 },
  title: { fontSize: 26, fontWeight: "bold", textAlign: "center", marginBottom: 8, color: "#8B7500" },
  subtitle: { fontSize: 16, textAlign: "center", marginBottom: 16 },
  emptyText: { textAlign: "center", fontSize: 16, color: "#999", marginTop: 20 },
  buttonContainer: { marginTop: 20 },
});
