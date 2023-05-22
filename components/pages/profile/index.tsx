import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ProfileOwner } from "../../pages/types/profile"

// Components
import Posts from "../../features/profile/posts";
import ProfileInfo from "../../features/profile/profileInfo";

//  Icons
import SavedPostsActive from "../../../assets/icons/savedPostsActive.svg";
import SavedPosts from "../../../assets/icons/savedPosts.svg";
import PostHistoryActive from "../../../assets/icons/post_history_active.svg";
import PostHistory from "../../../assets/icons/post_history.svg";

// Data
import { profileData } from "./profileData";
import { axiosInstance } from "../../../utils/services/service/axiosService";

const Profile = () => {
  const [activePostsTitle, setActivePostsTitle] = useState<string>("history");
  const [activePostsList, setActivePostsList] = useState<{ id: number; url: string }[]>([]);
  const [response, setResponse] = useState<any>();
  const [profileOwner, setProfileOwner] = useState<string>(ProfileOwner.CURRENT);
  const route = useRoute();

  useEffect(() => {
    setProfileOwner(route.params['owner']);
  }, [route]);

  const toglePosts = (target: string): void => {
    setActivePostsTitle(target === "history"? "history": "saved")
  };

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`/users/me`);
      if (response.data) {
        setResponse(response);
      };
    } catch (err) {
      console.log(err);
    };
  };

  useEffect(() => {
    setActivePostsList(response?.data?.posts ?
      response?.data?.posts[activePostsTitle] :
      []
    );
  }, [response, activePostsTitle])


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView>
      <View style={styles.profileContainer}>
        <ProfileInfo owner={profileOwner} />
        <View style={styles.posts}>
          <View style={styles.postsTogler}>
            <View
              onTouchEnd={() => toglePosts("history")}
              style={[styles.historyPost]}
            >
              {activePostsTitle === "history" ? (
                <PostHistoryActive />
              ) : (
                <PostHistory />
              )}
              <Text
                style={[
                  styles.postsToglerText,
                  activePostsTitle === "history" ? styles.activePost : undefined,
                ]}
              >
                Post History
              </Text>
            </View>
            <View 
            onTouchEnd={() => toglePosts("")} 
            style={styles.savedPost}>
              {activePostsTitle === "history" ? (
                <SavedPostsActive />
              ) : (
                <SavedPosts />
              )}

              <Text
                style={[
                  styles.postsToglerText,
                  activePostsTitle === "saved" ? styles.activePost : undefined,
                ]}
              >
                Saved Posts
              </Text>
            </View>
          </View>
          <Posts posts={activePostsList} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    width: "100%",
    backgroundColor: "white",
  },
  posts: {},
  activePost: {
    color: "#971E31",
  },
  postsTogler: {
    height: 44,
    flexDirection: "row",
    backgroundColor: "#F8F8F8",
  },
  historyPost: {
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  savedPost: {
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderLeftColor: "#333333",
    borderLeftWidth: 1,
  },
  postsToglerText: {
    marginLeft: 6,
  },
});

export default Profile;
