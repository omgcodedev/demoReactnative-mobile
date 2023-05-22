import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Posts from "../../components/features/profile/posts";
import CommonTabs from "../../components/shared/tabs/commonTabs";
import { IPost } from "../../types/post.types";
import ProfileInfo from "../../components/features/profile/profileInfo";
import SavedPostsIcon from "../../assets/icons/savedPosts.svg";
import PostsHistoryIcon from "../../assets/icons/postsHistory.svg";

const historyPosts = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
  },
  {
    id: 2,
    url: "https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509__340.jpg",
  },
  {
    id: 3,
    url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  },
  {
    id: 4,
    url: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
  },
  {
    id: 5,
    url: "https://img.freepik.com/free-photo/point-view-shot-narrow-suspension-bridge-thick-beautiful-forest_181624-8648.jpg?w=2000",
  },
  {
    id: 6,
    url: "https://media.istockphoto.com/id/610041376/photo/beautiful-sunrise-over-the-sea.jpg?s=612x612&w=0&k=20&c=R3Tcc6HKc1ixPrBc7qXvXFCicm8jLMMlT99MfmchLNA=",
  },
  {
    id: 7,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtF1Gz_Xsh2r_DfO5JaLspe4oKYcEGo-myBg&usqp=CAU",
  },
  {
    id: 8,
    url: "https://www.travelandleisure.com/thmb/rbPz5_6COrWFh94qFRHYLJrRM-g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/iguazu-falls-argentina-brazil-MOSTBEAUTIFUL0921-e967cc4764ca4eb2b9941bd1b48d64b5.jpg",
  },
  {
    id: 9,
    url: "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1618588507085-c79565432917?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    id: 11,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLF0hNtXKDfvSNBLEwsSkWIV--9MfVO7xKYg&usqp=CAU",
  },
  {
    id: 12,
    url: "https://www.fortishealthcare.com/blog/wp-content/uploads/2016/02/Beautiful-Wallpapers-14.jpg",
  },
  {
    id: 13,
    url: "https://i.pinimg.com/564x/b3/58/d2/b358d252429ed75cd15d66346d36d48f.jpg",
  },
];

const savedPosts = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?cs=srgb&dl=pexels-pixabay-326055.jpg&fm=jpg",
  },
  {
    id: 2,
    url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pfeiffer-beach-sunset-big-sur-ca-royalty-free-image-1590086887.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=640:*",
  },
];

const tabs = [
  {
    title: "Post History",
    icon: PostsHistoryIcon,
  },
  {
    title: "Saved Posts",
    icon: SavedPostsIcon,
  },
];

const Profile = () => {
  const [posts, setPosts] = useState<IPost[]>(historyPosts);

  const handleTabChange = (tabTitle: string) => {
    if (tabTitle === "Post History") setPosts(historyPosts);
    else setPosts(savedPosts);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <ProfileInfo /> */}
        <CommonTabs handleTabChange={handleTabChange} tabs={tabs} />
        <Posts posts={posts} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default Profile;
