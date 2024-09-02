import React, { useMemo, useRef } from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { colors, sizes } from "@/constants/Colors";

const { height } = Dimensions.get("window");

interface Props {
  onPress: () => void;
}

const CustomModal = ({ onPress }: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["46%"], []);

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        bottomInset={height / 3}
        detached={true}
        style={styles.sheetContainer}
        handleIndicatorStyle={{ display: "none" }}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Network Error</Text>
          <Text style={styles.description}>
            Unable to fetch data. Please check your internet connection and try again.
          </Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              bottomSheetRef.current?.close();
              onPress();
            }}
          >
            <Text style={styles.buttonTitle}>Try again</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },

  sheetContainer: {
    marginHorizontal: 20,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 16,
  },

  title: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "400",
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "400",
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: colors.primary,
    paddingVertical: 10,
    alignItems: "center",
    width: "100%",
    borderRadius: sizes.radius,
  },
  buttonTitle: {
    color: colors.white,
    fontWeight: "600",
  },
});

export default CustomModal;
