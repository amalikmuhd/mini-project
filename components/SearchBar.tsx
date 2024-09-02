import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { shadow, sizes } from "@/constants/Colors";
import ViewAnimation from "./ViewAnimation";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <ViewAnimation>
      <View style={styles.container}>
        <EvilIcons name="search" size={26} color="black" style={{ marginTop: -4 }} />
        <TextInput style={styles.input} placeholder="Search" value={searchQuery} onChangeText={setSearchQuery} />
        <MaterialCommunityIcons name="text" size={24} color="black" />
      </View>
    </ViewAnimation>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    paddingVertical: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "white",
    paddingHorizontal: 10,
    alignItems: "center",
    borderRadius: sizes.radius,
    elevation: 1.5,
    ...shadow.light,
  },
  input: {
    paddingHorizontal: 6,
    flex: 1,
    // ...shadow.light,
  },
});

export default SearchBar;
