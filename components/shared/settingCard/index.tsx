import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useStackNavigation } from "../../../hooks/navigation";
import { Settings } from "../../../utils/profileSettings";
import ArrowRight from "../../../assets/icons/arrowRight.svg";

export default function SettingCard({ info }: Settings): JSX.Element {
  const navigation = useStackNavigation();

  return (
    <View>
      {info.map((e, number) => (
        <View key={number} onTouchEnd={() => navigation.navigate(e.screen)}>
          <View style={styles.headerPart}>
            <Text style={styles.textSection}>{e.title}</Text>
            <ArrowRight />
          </View>
          <View style={styles.line} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  headerPart: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  line: {
    borderWidth: 0.5,
    borderColor: "#e3e3e3",
    marginBottom: 15,
  },
  textSection: {
    fontSize: 16,
  },
});
