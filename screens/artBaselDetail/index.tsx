import { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { Routes } from "../../navigation/routes";
import BaselDetailPopup from "../../components/features/baselDetailPopup";
import ProfilePic from "../../assets/icons/profilePicExample.svg";
import Heart from "../../assets/icons/heart.svg";
import Star from "../../assets/icons/star.svg";
import { useTabNavigation } from "../../hooks/navigation";

const ArtBasel = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const offerIsAvailable = true;
  const navigation = useTabNavigation();

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.imageArtBaselContainer}>
          <Image
            style={styles.imageArtBasel}
            source={require("../../assets/ArtBasel.png")}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>Acquavella Booth:</Text>
          <Text style={styles.secondaryText}>2134</Text>
        </View>
        <View style={styles.mainImageContainer}>
          <Image
            style={styles.mainImage}
            source={require("../../assets/detailImage.png")}
          />
        </View>
        <View>
          <Text style={styles.authorText}>Henri Matisse</Text>
          <Text style={styles.authorDescription}>
            Nature Morte Aux Mimosas sur fond noir, 1944 oil on canvas 21 1/2 x
            29 inches (54.6 x 73.7 cm) © 2020 succession H. Matisse / Artists
            Rights Society ( ARS), New York
          </Text>
        </View>
        <BaselDetailPopup
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <Pressable
          style={styles.viewAllButton}
          onPress={() => {
            if (!offerIsAvailable) setModalVisible(!modalVisible);
            else navigation.navigate(Routes.OFFER_CHAT);
          }}
        >
          <ProfilePic />
          <Text style={styles.viewAllText}>Offer</Text>
        </Pressable>
        <View>
          <View style={styles.iconContainer}>
            <Heart />
            <Text style={styles.iconText}>8.2k Likes</Text>
          </View>
          <View style={styles.iconContainer}>
            <Star />
            <Text style={styles.iconText}>Favorite</Text>
          </View>
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
    marginBottom: 22,
  },
  imageArtBasel: {
    width: 102,
    height: 37,
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  mainText: {
    // fontFamily: 'Noto Sans JP',
    fontWeight: "700",
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
  mainImageContainer: {
    width: 335,
    height: 210,
    marginVertical: 16,
    borderRadius: 10,
  },
  mainImage: {
    borderRadius: 10,
  },
  authorText: {
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 30,
    color: "#000000",
    marginBottom: 5,
  },
  authorDescription: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 23.2,
    color: "#333333",
  },
  viewAllButton: {
    display: "flex",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#ffffff",
    borderWidth: 0.5,
    borderRadius: 7,
    borderColor: "#b26c77",
    shadowColor: "rgba(138, 24, 42, 0.08)",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 25,
    shadowOpacity: 1,
    height: 75,
    marginVertical: 30,
  },
  viewAllText: {
    color: "#000000",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 15,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 22,
  },
  iconText: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
    color: "#111827",
    marginLeft: 21,
  },
});
