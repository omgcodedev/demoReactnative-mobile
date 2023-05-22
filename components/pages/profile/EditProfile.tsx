import { useContext, useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { StyleSheet, View, Text, Image, TextInput } from "react-native";
import VerifiedIcon from "../../../assets/icons/check-circle.svg";
import AddAvatarIcon from "../../../assets/icons/addAvatar.svg";
import { UserData } from "../../../types/userData.types";
import { UserServiceContext } from "../../../utils/services/service/userService";

const EditProfile = () => {
  const [data, setData] = useState<UserData>();
  const [nameValidation, setNameValidation] = useState<Boolean>(true);
  const [emailValidation, setEmailValidation] = useState<Boolean>(true);

  const getUser = async () => {
    const user = await userService.getCurrentUser();
    user && setData(user);
    return user
  }

  const userService = useContext(UserServiceContext);
  useEffect(() => {
    getUser();
  }, []);

  const onChange = (key: string, newValue: string): void => {
    setData((prev) => ({
      ...prev,
      [key]: newValue,
    }));
    key === "fullName" && setNameValidation(inputValidation("name", newValue));
    key === "email" && setEmailValidation(inputValidation("email", newValue));
  };

  const onSaveChanges = async (): Promise<void> => {
    try {
      nameValidation &&
        emailValidation &&
        (await userService.update(data))
    } catch (error) {
      console.error(error);
    }
  };

  const inputValidation = (key: string, input: string): boolean => {
    const reg =
      key === "name"
        ? /^[a-zA-Z]+ [a-zA-Z]+$/
        : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    return reg.test(input);
  };

  const pickImage = async (): Promise<void> => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    !result.canceled && onChange("avatar", result.assets[0].uri);
  };

  return (
    <View style={styles.EditProfileContainer}>
      <View style={styles.avatarAndName}>
        <View style={styles.avatarBox}>
          <Image
            style={styles.avatar}
            source={{
              uri: data?.avatar,
            }}
          />
          <AddAvatarIcon style={styles.avatarIcon} onPress={pickImage} />
        </View>
        <Text style={styles.fullName}>{data?.fullName}</Text>
      </View>
      <View
        style={[
          styles.inputBox,
          emailValidation ? styles.validInput : styles.invalidInput,
        ]}
      >
        <Text style={styles.inputText}>Email Address</Text>
        <View style={styles.flexRow}>
          <TextInput
            style={[
              styles.input,
              emailValidation ? styles.validInputText : null,
            ]}
            onChangeText={(e) => onChange("email", e)}
            value={data?.email}
          />
          {emailValidation && <VerifiedIcon />}
        </View>
      </View>
      <View
        style={[
          styles.inputBox,
          nameValidation ? styles.validInput : styles.invalidInput,
        ]}
      >
        <Text style={styles.inputText}>Username</Text>
        <View style={styles.flexRow}>
          <TextInput
            style={[
              styles.input,
              nameValidation ? styles.validInputText : null,
            ]}
            onChangeText={(e) => onChange("fullName", e)}
            value={data?.fullName}
          />
          {nameValidation && <VerifiedIcon />}
        </View>
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>Bio</Text>
        <TextInput
          numberOfLines={3}
          multiline={true}
          style={styles.input}
          onChangeText={(e) => onChange("bio", e)}
          value={data?.bio}
        />
      </View>
      <View style={styles.saveButton} onTouchEnd={onSaveChanges}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  EditProfileContainer: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    height: "100%",
  },
  avatarAndName: {
    alignItems: "center",
  },
  avatarBox: {
    position: "relative",
    width: 80,
    height: 80,
    borderRadius: 45,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 28,
    marginBottom: 10,
  },
  avatar: {
    width: 74,
    height: 74,
    borderRadius: 45,
  },
  avatarIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  fullName: {
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 20,
    marginTop: 7,
    marginRight: 12,
    color: "#111827",
    marginBottom: 20,
  },
  userInfo: {
    backgroundColor: "white",
  },
  inputBox: {
    borderBottomWidth: 0.5,
    paddingBottom: 9,
    marginBottom: 16,
  },
  validInputText: {
    width: "90%",
  },
  input: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    maxHeight: 70,
    width: "100%",
  },
  inputText: {
    fontSize: 14,
    color: "#A8A8A8",
    lineHeight: 24,
    marginBottom: 5,
  },
  validInput: {
    borderBottomColor: "#6DD78B",
  },
  invalidInput: {
    borderBottomColor: "black",
  },
  saveButton: {
    backgroundColor: "#971E31",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 8,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 23,
    color: "#FFFFFF",
  },
  flexRow: {
    flexDirection: "row",
  },
});
