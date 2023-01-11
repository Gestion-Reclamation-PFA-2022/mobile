import { FormData, Button, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeBaseProvider, Input, Icon } from "native-base";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { useBreakpointValue } from "native-base";
import { ScrollView } from "native-base";
import { MasonaryLayout } from "../components/MasonaryLayout";
import { StoryBook } from "../components/StoryBook";
import { Layout } from "../components/Layout";

function Dashboard() {
  const navigation = useNavigation();

  return (
    <Layout>
      <ScrollView
        contentContainerStyle={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
      >
        <MasonaryLayout
          column={useBreakpointValue({
            base: [1, 1],
            sm: [1, 1],
            md: [1, 1, 1],
            // lg: [1, 1, 1, 1],
            // xl: [1, 1, 1, 1, 1],
          })}
          _hStack={{
            space: 4,
            mb: 4,
            pt: "70px",
          }}
          _vStack={{ space: 2 }}
        >
          <StoryBook
            navigation={navigation}
            name="Reclamation"
            minH={32}
            _box={{
              lightGrad: ["cyan.400", "teal.200"],
              darkGrad: ["cyan.600", "teal.300"],
            }}
            _heading={{
              color: "amber.100",
            }}
          />
          <StoryBook
            navigation={navigation}
            name="Reclamation"
            minH={32}
            _box={{
              lightGrad: ["cyan.400", "teal.200"],
              darkGrad: ["cyan.600", "teal.300"],
            }}
            _heading={{
              color: "amber.100",
            }}
          />
          <StoryBook
            navigation={navigation}
            name="Reclamation"
            minH={32}
            _box={{
              lightGrad: ["cyan.400", "teal.200"],
              darkGrad: ["cyan.600", "teal.300"],
            }}
            _heading={{
              color: "amber.100",
            }}
          />
        </MasonaryLayout>
      </ScrollView>
    </Layout>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <Dashboard />
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Middle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  DashboardText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  buttonStyle: {},
});
