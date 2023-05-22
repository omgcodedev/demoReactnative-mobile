import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useTabNavigation } from "../../../hooks/navigation";
import { Routes } from "../../../navigation/routes";

interface OfferCardProps {
  title: string;
  icon: JSX.Element;
}

const OfferCard = ({ title, icon }: OfferCardProps): JSX.Element => {
  const navigation = useTabNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        if (title === "Accept") navigation.navigate(Routes.NEW_OFFER);
      }}
    >
      {icon}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default OfferCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    height: "100%",
    width: "24%",
  },
  title: {
    fontWeight: "300",
    fontSize: 10,
    lineHeight: 14,
    color: "#333333",
    marginTop: 10,
    textAlign: "center",
    paddingHorizontal: 10,
  },
});
