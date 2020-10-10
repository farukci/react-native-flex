import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topbox}>
        <View style={styles.orange}>
          <Text style={styles.orangeText}>Orange Circle</Text>
        </View>
        <View style={styles.yellow}>
          <Text>Yellow Box</Text>
        </View>
      </View>
      <View style={styles.bottombox}>
        <View style={styles.black}>
          <Text style={styles.blackText}>Black Box</Text>
        </View>
        <View style={styles.brown}>
          <Text style={styles.brownText}>Brown{"\n"}Box</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: 'red',
    // padding: 8,
  },
  topbox: {
    flex: 4,
    backgroundColor: "grey",
    margin: 20,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  bottombox: {
    flex:7,
    backgroundColor: "pink",
    flexDirection: "row",
  },
  orange:{
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    borderRadius: 100/2,
  },
  yellow:{
    backgroundColor: "yellow",
    padding: 10,
    borderRadius: 10,
  },
  orangeText:{
    fontWeight: "bold",
  },
  black:{
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    flex: 4,
    margin: 30,
  },
  brown:{
    backgroundColor: "brown",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 50,
    flex: 1,
    margin: 20,
  },
  blackText:{
    fontWeight: "bold",
    color: "white",
  },
  brownText:{
    fontWeight: "bold",
    color: "white",
    transform: [{ rotateZ: "-90deg" }],
  },
});
