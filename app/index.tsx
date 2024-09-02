import React, { useState } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import ItemList from "@/components/ItemList";
import { router } from "expo-router";
import { colors } from "@/constants/Colors";
import Animated, { FadeInDown } from "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { getCharacters } from "@/service/endpoint";
import { useQuery } from "react-query";
import { Skeleton } from "moti/skeleton";
import formatDate from "@/utils/date";
import { Data } from "@/types";

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { isLoading, data, error, refetch } = useQuery({
    queryKey: ["character"],
    queryFn: () => getCharacters(),
  });

  const filteredData = data?.data?.results?.filter((character: Data) =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (error) {
    return (
      <GestureHandlerRootView>
        <Text>Error</Text>
      </GestureHandlerRootView>
    );
  }

  return (
    <View style={styles.container}>
      {isLoading ? (
        <FlatList
          data={[1, 2, 3, 4, 5, 6]}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          style={styles.flatContainer}
          columnWrapperStyle={styles.columnWrapperStyle}
          renderItem={({ item, index }) => (
            <Animated.View entering={FadeInDown.delay(index < 6 ? index * 1 : 0)}>
              <Skeleton show={true} colorMode="light">
                <ItemList item={item as never} onPress={() => {}} />
              </Skeleton>
            </Animated.View>
          )}
        />
      ) : (
        <FlatList
          data={filteredData as never}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          style={styles.flatContainer}
          columnWrapperStyle={styles.columnWrapperStyle}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <Animated.View entering={FadeInDown.delay(index < 6 ? index * 1 : 0)}>
              <ItemList
                item={item as never}
                onPress={() => {
                  router.push({
                    pathname: "/detail",
                    params: {
                      ...item,
                      created: formatDate(new Date(item.created)),
                    },
                  });
                }}
              />
            </Animated.View>
          )}
          ListEmptyComponent={() => <Text style={{ paddingLeft: 10 }}>No Results found</Text>}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },

  flatContainer: {
    marginTop: 20,
    paddingTop: 10,
  },
  columnWrapperStyle: { gap: 10, paddingBottom: 10 },
});

export default HomeScreen;
