import { StyleSheet, View, Image, Text } from "react-native";
import Verified from "../../../assets/icons/verified.svg";

interface SocialFeedProps {
  mainText?: string;
  isVerified?: boolean;
  // for now photo url will be hardcoded static value
  photoUrl?: string;
}

const SocialFeed = ({
  mainText,
  isVerified,
  photoUrl,
}: SocialFeedProps): JSX.Element => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageSocialFeed}>
        <Image source={require("../../../assets/socialFeed.png")} />
      </View>
      {isVerified && (
        <View style={styles.verified}>
          <Verified />
        </View>
      )}
      <View style={[!isVerified && { marginLeft: 10 }, styles.textContainer]}>
        <Text numberOfLines={2} ellipsizeMode='middle' style={styles.mainText}>{mainText}</Text>
      </View>
    </View>
  );
};

export default SocialFeed;

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    width: "100%",
    height: 73,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: "rgba(181, 181, 181, 0.3)",
  },
  imageSocialFeed: {
    width: 70,
    height: 70,
    borderRadius: 7,
  },
  verified: {
    marginHorizontal: 15,
  },
  mainText: {
    color: "#333333",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 21,
  },
  textContainer: {
    flex: 1,
    marginRight: 25,
  },
});
