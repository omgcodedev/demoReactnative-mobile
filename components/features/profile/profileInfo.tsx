import {
  StyleSheet,
  View,
  Image,
  Text,
} from "react-native";
import { useEffect, useState } from "react";
import Insight from "./Insights";
import { useTabNavigation } from "../../../hooks/navigation";
import { UserData } from "../../../types/userData.types";
import { Routes } from "../../../navigation/routes";
import { ProfileOwner } from "../../pages/types/profile"
import EditIcon from "../../../assets/icons/editProfile.svg";
import { axiosInstance } from "../../../utils/services/service/axiosService";

type ProfileInfoProps = {
  owner: string;
};

const ProfileInfo: React.FC<ProfileInfoProps> = ({ owner }) => {
  const [avatar, setAvatar] = useState<string>(' ');
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [bio, setBio] = useState<string>('');
  const [engagement, setEngagement] = useState<any>();
  const [user, setUser] = useState<UserData>();
  
  const navigation = useTabNavigation();

  const getCurrentUser = async () => {
    try {
      const response = await axiosInstance.get(`/users/me`);
      if (response.data) {
        setUser(response.data);
        setAvatar(response.data?.avatar);
        setUsername(response.data?.fullName);
        setEmail(response.data?.email);
        setBio(response.data?.bio);
        setEngagement(response.data?.engagement);
      };

    } catch (err) {
      console.log(err);
    };
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <View style={styles.profileInfo}>
      <View style={styles.profileEngagement}>
        <View style={styles.avatarBox}>
          <Image style={styles.avatar} source={{ uri: avatar }} />
        </View>
        <View style={styles.insightBox}>
          {engagement && Object.keys(engagement).map((insight, index) => (
            <Insight key={index} title={insight} count={engagement?.[insight]} />
          ))}
        </View>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.fullName}>{username}</Text>
        {owner === ProfileOwner.CURRENT && <View
          onTouchEnd={() => navigation.navigate(Routes.EDIT_PROFILE)}
        >
          <EditIcon />
        </View>}
      </View>
      <Text style={styles.email}>{email}</Text>
      <Text style={styles.bio} numberOfLines={3} ellipsizeMode="tail">
        {bio}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    width: "100%",
    backgroundColor: "white",
  },
  profileInfo: {
    paddingTop: 18,
    paddingBottom: 22,
    paddingHorizontal: 24,
  },
  avatarBox: {
    width: 88,
    height: 88,
    borderRadius: 45,
    borderWidth: 6,
    borderColor: "white",
    overflow: "hidden",
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  profileEngagement: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  insightBox: {
    flexDirection: "row",
  },
  nameContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  fullName: {
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 20,
    marginTop: 7,
    marginRight: 12,
    color: "#111827",
  },
  email: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 20,
    marginTop: 8,
    marginBottom: 8,
    color: "#9CA3AF",
  },
  bio: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 20,
    color: "#111827",
  },
  buttonsBox: {
    width: "100%",
    flexDirection: "row",
  },
  button: {
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F3F4F6",
    paddingHorizontal: 32,
    paddingVertical: 12,
  },
  buttonTitle: {
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 25,
    marginLeft: 8,
    color: "#324068",
  },
  posts: {},
});

export default ProfileInfo;
