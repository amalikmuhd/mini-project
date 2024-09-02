import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "@/constants/Colors";

const DetailScreen = () => {
  const item = useLocalSearchParams();

  return (
    <ImageBackground source={{ uri: item?.image as never }} resizeMode="cover" style={styles.container}>
      <View>
        <Ionicons
          name="arrow-back-circle-outline"
          size={32}
          color="white"
          style={{ marginTop: 40 }}
          onPress={() => router.back()}
        />
      </View>
      <View>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.body}>{item.status}</Text>
        <Text style={styles.body}>{item.species}</Text>
        <Text style={styles.body}>{item.type}</Text>
        <Text style={styles.body}>{item.gender}</Text>
        <Text style={styles.body}>
          {item?.episode?.length === 1 ? "Episode" : "Episodes"}: {item?.episode?.length}
        </Text>
        <Text style={styles.body}>Created: {item.created}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: colors.white,
  },
  body: {
    fontSize: 20,
    color: colors.white,
  },
});

export default DetailScreen;
