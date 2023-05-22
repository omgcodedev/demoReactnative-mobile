import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  NativeModules,
  Platform,
} from "react-native";
import { MenuProvider } from "react-native-popup-menu";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NavigationStack from "./navigation/navigationStack";

const { StatusBarManager } = NativeModules;

const App = (): JSX.Element => {
  return (
    <MenuProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <SafeAreaProvider>
          <NavigationStack />
        </SafeAreaProvider>
      </SafeAreaView>
    </MenuProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBarManager.HEIGHT + 10 : 0,
  },
});

export default App;
