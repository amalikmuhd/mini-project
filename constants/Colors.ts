import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const colors = {
  primary: "#070f18",
  gray: "#8b8989",
  lightGray: "#b2b2b2",
  light: "#fbfbfb",
  white: "#fff",
  black: "#000",
};

export const shadow = {
  light: {
    shadowColor: colors.black,
    shadowRadius: 4,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  dark: {
    shadowColor: colors.black,
    shadowRadius: 4,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
};

export const sizes = {
  width,
  height,
  title: 32,
  h2: 24,
  h3: 18,
  body: 14,
  caption: 12,
  radius: 16,
};
