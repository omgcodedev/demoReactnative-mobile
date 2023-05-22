import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "../../components/shared/input";

export default function ProvenancePro(): JSX.Element {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headerText}>Provenance Pro</Text>
      <View>
        <Input
          label="Full Name"
          placeholder="Full Name"
          handleChange={() => {}}
        />
        <Input
          label="Profession"
          placeholder="Enter your specialty"
          handleChange={() => {}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    padding: 20,
    backgroundColor: "#ffffff",
  },
  headerText: {
    fontSize: 20,
    color: "#111827",
  },
});
