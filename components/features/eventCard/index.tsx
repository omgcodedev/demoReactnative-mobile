import { StyleSheet, View, Image, Text } from "react-native";
import SmallTime from "../../../assets/icons/smallTime.svg";
import SmallLocation from "../../../assets/icons/smallLocation.svg";

interface EventCardProps {
  mainText?: string;
  secondaryText?: string;
  locationText?: string;
  dateText?: string;
  photoUrl?: string; 
}

const eventCard = ({
  mainText,
  secondaryText,
  locationText,
  dateText,
  photoUrl,
}: EventCardProps): JSX.Element => {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.imageBox}>
          <Image
              style={styles.eventImage} 
              // Image needs to be embedded with app at runtime, for now it will not work for a dynamic path
              source={
                require("../../../assets/ArtBaselCard.png")
              }
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>{mainText}</Text>
          <Text style={styles.secondaryText}>{secondaryText}</Text>
        </View>
        <View style={styles.cardInfo}>
          <View style={styles.iconText}>
            <SmallLocation />
            <Text style={styles.infoText}>{locationText}</Text>
          </View>
          <View style={styles.iconText}>
            <SmallTime />
            <Text style={styles.infoText}>{dateText}</Text>
          </View>
        </View>
    </View>
  );
};

export default eventCard;

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    padding: 10.5,
    backgroundColor: "#ffffff",
    width: 160,
    height: 260,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: "rgba(0, 0, 0, 0.31)",
  },
  eventImage: {
    width: 135,
    height: 135
  },
  imageBox: {
    backgroundColor: "#ffffff",
    width: 135,
    height: 135,
    borderWidth: 0.5,
    borderColor: "#b0b0b0",
    borderRadius: 5,
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 14,
  },
  mainText: {
    // fontFamily: 'Noto Sans JP',
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    color: "#000000",
  },
  secondaryText: {
    // fontFamily: 'Noto Sans JP',
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 18,
    color: "#999999",
  },
  cardInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  iconText: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  infoText: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 18,
    color: "rgba(0, 0, 0, 0.3)",
    marginLeft: 8,
  }
});
