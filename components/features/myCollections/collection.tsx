import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RootStackParamList, Routes } from "../../../navigation/routes";
import LockIcon from "../../../assets/icons/lock.svg";
import InfoIcon from "../../../assets/icons/infoIcon.svg";

export type CollectionProps = {
  title: string;
  images: ImageSourcePropType[];
  icons: boolean;
  hint?: string;
};

const Collection: React.FC<CollectionProps> = ({
  title,
  images,
  icons,
  hint,
}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.hint}>{hint}</Text>
        </View>
        {icons && (
          <View style={styles.iconsContainer}>
            <InfoIcon />
            <LockIcon />
          </View>
        )}
      </View>
      <View style={styles.imagesContainer}>
        {images.map((image: { uri: string }, index: number) => (
          <TouchableOpacity
            key={image.uri + index}
            onPress={() => navigation.navigate(Routes.PURCHASE)}
          >
            <Image key={index} style={styles.image} source={image} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    marginTop: 30,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontWeight: "500",
    fontSize: 18,
    color: "#333333",
  },
  hint: {
    fontWeight: "300",
    fontSize: 10,
    color: "#333333",
    marginLeft: 10,
  },
  iconsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 30,
  },
  imagesContainer: {
    width: "100%",
    height: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 7,
  },
});

export default Collection;
