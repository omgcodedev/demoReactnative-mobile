import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import { useStackNavigation } from "../../hooks/navigation";
import { Routes } from "../../navigation/routes";
import Carousel from "../../components/features/carousel";

const ArtBasel = () => {
  const navigation = useStackNavigation();

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.imageArtBaselContainer}>
          <Image
            style={styles.imageArtBasel}
            source={require("../../assets/ArtBasel.png")}
          />
        </View>
        <View style={styles.artBaselPanel}>
          <Carousel
            imageClick={() => navigation.navigate(Routes.ART_BASEL_DETAIL)}
            mainText="Pace Gallery Booth:"
            secondaryText="1123"
            data={["123"]}
          />
        </View>
        <View style={styles.artBaselPanel}>
          <Carousel
            imageClick={() => navigation.navigate(Routes.ART_BASEL_DETAIL)}
            mainText="Acquavella Booth"
            data={["123"]}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>White Cube Gallery Booth:</Text>
          <Text style={styles.secondaryText}>3124</Text>
        </View>
        <View style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View All</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ArtBasel;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
  },
  imageArtBaselContainer: {
    width: 110,
    height: 42,
    backgroundColor: "#ffffff",
    borderWidth: 0.5,
    borderColor: "#acacac",
    borderRadius: 3,
    padding: 3,
    marginTop: 40,
    marginBottom: 30,
  },
  imageArtBasel: {
    width: 102,
    height: 37,
  },
  artBaselPanel: {
    marginBottom: 30,
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  mainText: {
    // fontFamily: 'Noto Sans JP',
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 27,
    color: "#333333",
  },
  secondaryText: {
    // fontFamily: 'Noto Sans JP',
    fontWeight: "300",
    fontSize: 14,
    lineHeight: 21,
    color: "#333333",
    marginLeft: 8,
  },
  viewAllButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f1ebec",
    borderWidth: 0.5,
    borderRadius: 50,
    borderColor: "rgba(138, 24, 42, 0.6)",
    shadowColor: "rgba(138, 24, 42, 0.1)",
    shadowOffset: { width: 0, height: 15 },
    shadowRadius: 35,
    shadowOpacity: 1,
    height: 55,
    marginVertical: 30,
  },
  viewAllText: {
    color: "#8a182a",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
  },
});
