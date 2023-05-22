import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BackIcon from "../../../assets/icons/backIcon.svg";

type PageHeader = {
  title: string;
};

const PageHeader: React.FC<PageHeader> = ({ title }) => {
  return (
    <View style={styles.header}>
      <BackIcon />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 26,
    paddingTop: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 27,
  },
});

export default PageHeader;
