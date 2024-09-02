import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { colors } from "@/constants/Colors";
import ViewAnimation from "./ViewAnimation";

export default function Header() {
  return (
    <ViewAnimation>
      <View style={styles.container}>
        <MaterialCommunityIcons name="text-long" size={24} color="black" />
        <Text style={{ fontSize: 16, color: "black", fontWeight: "bold" }}>Search</Text>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>
    </ViewAnimation>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 30,
    paddingBottom: 10,
    backgroundColor: colors.light,
  },
});
