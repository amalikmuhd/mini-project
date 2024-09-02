import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image, Dimensions, ViewStyle, StyleProp } from "react-native";
import { colors, shadow, sizes } from "@/constants/Colors";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Data } from "@/types";
import formatDate from "@/utils/date";

const { width, height } = Dimensions.get("window");

interface Props {
  item: Data;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const ItemList = ({ item, onPress, style }: Props) => {
  return (
    <Animated.View entering={FadeInDown.duration(100)}>
      <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Image
          source={{ uri: item?.image }}
          resizeMode="cover"
          style={{ width: "100%", height: "53%", borderRadius: 10 }}
        />
        <Text style={styles.title}>{item?.name}</Text>
        <Text style={styles.description}>Species: {item?.gender}</Text>
        <Text style={styles.description}>
          {item?.episode?.length === 1 ? "Episode" : "Episodes"}: {item?.episode?.length}
        </Text>
        {item?.created && <Text style={styles.description}>Release:{" " + formatDate(new Date(item?.created))}</Text>}
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: colors.white,
    // borderRadius: sizes.radius,
    elevation: 1.5,
    ...shadow.light,
    width: width / 2.21,
    height: height / 2.9,
  },
  title: {
    fontSize: 16,
    paddingLeft: 6,
  },
  description: {
    fontSize: 12,
    paddingLeft: 6,
    paddingBottom: 6,
  },
});

export default ItemList;
