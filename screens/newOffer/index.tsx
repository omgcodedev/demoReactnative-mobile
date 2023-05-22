import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import BackIcon from "../../assets/icons/backIcon.svg";
import Input from "../../components/shared/input";
import { useTabNavigation } from "../../hooks/navigation";
import { Routes } from "../../navigation/routes";

export default function NewOffer(): JSX.Element {
  const navigation = useTabNavigation();
  const [price, setPrice] = useState<string>("");

  return (
    <View>
      <View style={styles.header}>
        <BackIcon onPress={() => navigation.navigate(Routes.OFFER_CHAT)} />
        <Text style={styles.title}>Deal Room Chat</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.textTitle}>Accept The Offer</Text>
        <Input
          handleChange={setPrice}
          label="Type the amount of the offer"
          placeholder="Enter price"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate(Routes.CONFIRM_OFFER, {
              id: null,
              price: price,
            })
          }
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "600",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 27,
  },
  header: {
    padding: 20,
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 11,
    paddingHorizontal: 124,
    backgroundColor: "#8A182A",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 32,
  },
  buttonText: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    color: "#FFFFFF",
  },
});
