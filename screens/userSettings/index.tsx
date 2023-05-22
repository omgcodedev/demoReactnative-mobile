import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import GoBackIcon from "../../assets/icons/Go_Back.svg";
import SettingCard from "../../components/shared/settingCard";
import { useStackNavigation } from "../../hooks/navigation";
import { Routes } from "../../navigation/routes";
import { AccountSettings, ProfileSettings } from "../../utils/profileSettings";

const UserSettings = () => {
  const navigation = useStackNavigation();

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.headerPart}>
          <GoBackIcon onPress={() => navigation.navigate(Routes.CONNECTION)} />
          <Text style={styles.textSection}>Settings</Text>
        </View>
        <View style={styles.container}>
          <SettingCard info={ProfileSettings} />
          <Text style={styles.middleText}>Account settings</Text>
          <SettingCard info={AccountSettings} />
          <View style={styles.button}>
            <Text style={styles.buttonText}>Log Out</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerPart: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ffffff",
  },
  middleText: {
    marginTop: 20,
    marginBottom: 16,
    fontSize: 16,
    color: "#858585",
  },
  textSection: {
    marginLeft: 15,
    fontSize: 20,
    color: "#111827",
  },
  button: {
    height: 43,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 5,
    borderColor: "#971E31",
  },
  buttonText: {
    color: "#971E31",
  },
  container: {
    padding: 20,
  },
  mainContainer: {
    backgroundColor: "#ffffff",
    height: "100%",
  },
});

export default UserSettings;
