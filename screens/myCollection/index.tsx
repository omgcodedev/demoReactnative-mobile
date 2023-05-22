import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Collection, {
  CollectionProps,
} from "../../components/features/myCollections/collection";

const collections: CollectionProps[] = [
  {
    title: "My Walls",
    hint: "(Upload your art work)",
    images: [
      {
        uri: "https://i.pinimg.com/236x/45/5d/64/455d643a6d2bfb508be8a3acb66fa3df.jpg",
      },
      {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtF1Gz_Xsh2r_DfO5JaLspe4oKYcEGo-myBg&usqp=CAU",
      },
      {
        uri: "https://www.travelandleisure.com/thmb/rbPz5_6COrWFh94qFRHYLJrRM-g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/iguazu-falls-argentina-brazil-MOSTBEAUTIFUL0921-e967cc4764ca4eb2b9941bd1b48d64b5.jpg",
      },
    ],
    icons: true,
  },
  {
    title: "My Purchases",
    images: [
      {
        uri: "https://i.pinimg.com/236x/45/5d/64/455d643a6d2bfb508be8a3acb66fa3df.jpg",
      },
      {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtF1Gz_Xsh2r_DfO5JaLspe4oKYcEGo-myBg&usqp=CAU",
      },
      {
        uri: "https://www.travelandleisure.com/thmb/rbPz5_6COrWFh94qFRHYLJrRM-g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/iguazu-falls-argentina-brazil-MOSTBEAUTIFUL0921-e967cc4764ca4eb2b9941bd1b48d64b5.jpg",
      },
    ],
    icons: false,
  },
  {
    title: "Deal Room",
    images: [
      {
        uri: "https://i.pinimg.com/236x/45/5d/64/455d643a6d2bfb508be8a3acb66fa3df.jpg",
      },
      {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtF1Gz_Xsh2r_DfO5JaLspe4oKYcEGo-myBg&usqp=CAU",
      },
      {
        uri: "https://www.travelandleisure.com/thmb/rbPz5_6COrWFh94qFRHYLJrRM-g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/iguazu-falls-argentina-brazil-MOSTBEAUTIFUL0921-e967cc4764ca4eb2b9941bd1b48d64b5.jpg",
      },
    ],
    icons: false,
  },
];

const MyCollection = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {collections.map((section: CollectionProps, index: number) => (
          <Collection key={section.title + index} {...section} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 19,
  },
});

export default MyCollection;
