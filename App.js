/*
 * @LastEditTime: 2022-08-13 17:37:24
 * @Description:
 * @Date: 1985-10-26 16:15:00
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  console.log("app laughted");
  return (
    <View style={styles.container}>
      <Text>hello wolrd</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
