import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
// import Card from "../../components/features/serviceMarketplace/Card";
// import PageHeader from "../../components/shared/header";
import ProIcon from "../../assets/icons/marketplacePro.svg";
import MarketplaceService from "../../assets/icons/marketplaceService.svg";
import { useTabNavigation } from "../../hooks/navigation";
import { Routes } from "../../navigation/routes";

export enum MarketplaceRowType {
  PRO = "pro",
  MARKETPLACE = "marketplace",
}

const ServicesMarketplace = () => {
  const navigation = useTabNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.buttonsBox}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate(Routes.SELECT_PROVENANCE_PRO, {
              type: MarketplaceRowType.PRO,
            })
          }
        >
          <View style={styles.content}>
            <ProIcon />
            <Text style={styles.text}>Select A Provenance Pro</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate(Routes.SELECT_SERVICE_MARKETPLACE, {
              type: MarketplaceRowType.MARKETPLACE,
            })
          }
        >
          <View style={styles.content}>
            <MarketplaceService />
            <Text style={styles.text}>Services Marketplace</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
  buttonsBox: {
    alignItems: "center",
  },
  button: {
    width: 335,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#971E31",
    marginTop: 20,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "#ffffff",
    marginLeft: 20,
    fontWeight: "700",
    lineHeight: 24,
  },
});

export default ServicesMarketplace;
