import { View, Text, StyleSheet } from "react-native";
import GreyFile from "../../../assets/icons/greyFile.svg";
import GreyMessage from "../../../assets/icons/greyMessage.svg";
import GreyVideocall from "../../../assets/icons/greyVideocall.svg";
import { MarketplaceRowType } from "../../../screens/servicesMarketplace";

const Controls = ({ type }) => {
  return type === MarketplaceRowType.PRO ? (
    <View style={styles.proIcons}>
      <GreyFile style={styles.icon} />
      <GreyMessage style={styles.icon} />
      <GreyVideocall style={styles.icon} />
    </View>
  ) : (
    <View style={styles.proIcons}>
      <View style={styles.quote}>
        <Text style={styles.quoteText}>Online</Text>
        <Text style={styles.quoteText}>Quote</Text>
      </View>
      <GreyMessage style={styles.icon} />
    </View>
  );
};

export default Controls;

const styles = StyleSheet.create({
  proIcons: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 10,
  },
  randomIcons: {
    flexDirection: "row",
  },
  quote: {
    alignItems: "center",
    marginRight: 40,
  },
  quoteText: {
    fontWeight: "700",
    fontSize: 10,
  },
});
