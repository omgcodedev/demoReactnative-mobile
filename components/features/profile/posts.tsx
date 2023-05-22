import { StyleSheet, View, Image } from "react-native";
import { IPost } from "../../../types/post.types";

type PostsProps = {
  posts: IPost[];
};

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <View style={styles.container}>
      {!!posts?.length && posts.map((post) => (
        <View key={post.id} style={styles.post}>
          <Image style={styles.postImage} source={{ uri: post.url }}></Image>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    width: "100%",
  },
  post: {
    display: "flex",
    width: `${(1 / 3) * 100}%`,
    height: 124,
  },
  postImage: {
    width: "100%",
    height: "100%",
  },
});

export default Posts;
