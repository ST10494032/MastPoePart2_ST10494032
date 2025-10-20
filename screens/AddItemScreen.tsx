import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, Button, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { MenuItem } from "../types/MenuItem";
import { useNavigation, useRoute } from "@react-navigation/native";
import { v4 as uuidv4 } from "uuid";

const AddItemScreen: React.FC = () => {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState("Starters");
  const [price, setPrice] = useState("");
  const navigation = useNavigation();
  const route = useRoute<any>();

  const { menuItems, setMenuItems } = route.params || {};

  const handleAddItem = () => {
    if (!name || !description || !price) {
      Alert.alert("Missing Details", "Please fill in all fields.");
      return;
    }

    const newItem: MenuItem = {
      id: uuidv4(),
      name,
      description,
      course,
      price: parseInt(price),
    };

    setMenuItems([...menuItems, newItem]);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Dish Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter dish name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter dish description"
        value={description}
        onChangeText={setDescription}
      />

      <Text style={styles.label}>Course</Text>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={course} onValueChange={(itemValue) => setCourse(itemValue)}>
          <Picker.Item label="Starters" value="Starters" />
          <Picker.Item label="Main" value="Main" />
          <Picker.Item label="Dessert" value="Dessert" />
          <Picker.Item label="Drinks" value="Drinks" />
        </Picker>
      </View>

      <Text style={styles.label}>Price (R)</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter price"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      <View style={{ marginTop: 20 }}>
        <Button title="Add Dish" color="#B8860B" onPress={handleAddItem} />
      </View>
    </View>
  );
}
export default AddItemScreen;
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF8DC", padding: 20 },
  label: { fontSize: 16, fontWeight: "bold", color: "#8B7500", marginBottom: 6 },
  input: {
    borderWidth: 1,
    borderColor: "#B8860B",
    borderRadius: 6,
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 15,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#B8860B",
    borderRadius: 6,
    backgroundColor: "#fff",
    marginBottom: 15,
  },
});
