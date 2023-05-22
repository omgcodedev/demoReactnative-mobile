import { View, Text, StyleSheet, Image } from "react-native";
import ReviewIcon from "../../../assets/icons/reviewIcon.svg";
import MessageIcon from "../../../assets/icons/messageIcon.svg";
import ApprovedIcon from "../../../assets/icons/approvedIcon.svg";

type CardProps = {
  title: string;
  reviews: number;
  picture: string;
  specialization?: string;
};

const Card: React.FC<CardProps> = ({
  title,
  reviews,
  picture,
  specialization,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.pictureContainer}>
        <Image style={styles.picture} source={{ uri: picture }} />
      </View>
      <View style={styles.innerContent}>
        <View style={styles.infoContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
            <ApprovedIcon />
          </View>
          <Text style={styles.specialization}>{specialization}</Text>
          <View style={styles.reviewsContainer}>
            <Text style={styles.reviewTxt}>Reviews</Text>
            <View style={styles.reviews}>
              {Array(reviews)
                .fill(1)
                .map((key: number, index: number) => (
                  <ReviewIcon key={key + index} style={styles.reviewIcon} />
                ))}
            </View>
          </View>
        </View>
        <View style={styles.actions}>
          <Text style={styles.quote}>Online Quote</Text>
          <MessageIcon />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    height: 95,
    paddingRight: 25,
    paddingLeft: 15,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.05)",
  },
  pictureContainer: {
    height: 70,
    width: 70,
  },
  picture: {
    flex: 1,
  },
  innerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    paddingLeft: 11,
  },
  infoContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    marginRight: 8,
    fontWeight: "500",
    fontSize: 16,
  },
  specialization: {
    marginTop: 15,
    fontSize: 10,
  },
  reviewsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  reviewTxt: {
    fontSize: 10,
  },
  reviews: {
    flexDirection: "row",
    alignItems: "center",
  },
  reviewIcon: {
    marginLeft: 5,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
  },
  quote: {
    fontWeight: "700",
    fontSize: 10,
    marginRight: 40,
    width: 50,
  },
});

export default Card;
