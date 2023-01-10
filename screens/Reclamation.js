import { FormData, Button, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeBaseProvider, Input, Icon } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";

function Reclamation() {
  return (
    <View style={styles.container}>
      <View style={styles.Middle}>
        <Text style={styles.ReclamationText}>Reclamation</Text>
      </View>

      <View style={styles.buttonStyle}>
        <View style={styles.Subject}>
          <Input
            variant="outline"
            placeholder="Subject"
            secureTextEntry={true}
          />
        </View>
      </View>
      <View style={styles.buttonStyle}>
        <View style={styles.Description}>
          <Input
            s
            placeholder="Description"
            multiline={true}
            variant="outline"
            secureTextEntry={true}
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
        </View>
      </View>
      <View style={styles.Submit}>
        <Button title="Submit" />
      </View>
    </View>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <Reclamation />
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Middle: {
    alignItems: "center",
    justifyContent: "center",
  },
  Subject: {
    marginTop: 100,
  },
  Description: {
    marginTop: 50,
  },
  Submit: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
  },
  boxStyle: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: "space-around",
  },
  buttonStyle: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
  },
  ReclamationText: {
    marginTop: 100,
    fontSize: 30,
    fontWeight: "bold",
  },
});
