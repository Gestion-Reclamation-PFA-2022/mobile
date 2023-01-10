import { FormData, Button, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeBaseProvider, Input, Icon } from "native-base";

function Dashboard() {
  return (
    <View style={styles.container}>
      <View style={styles.Middle}>
        <View Style={styles.DashboardText}>
          <Text>Dashboard</Text>
        </View>
      </View>
      <View style={styles.buttonStyle}>
        <View style={styles.PostReclamation}>
          <Button title="Post Reclamation" />
        </View>
      </View>
      <View style={styles.buttonStyle}>
        <View style={styles.ViewReclamation}>
          <Button title="View Reclamation" />
        </View>
      </View>
      <View style={styles.buttonStyle}>
        <View style={styles.Logout}>
          <Button title="Logout" />
        </View>
      </View>
    </View>
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
