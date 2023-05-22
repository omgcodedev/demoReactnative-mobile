import { RefObject, useEffect, useRef, useState } from "react";
import { StyleSheet, TextInput, ScrollView, View, Text } from "react-native";
import Message, { UserInfo } from "./Message";

type MessageType = {
  userId: number;
  text: string;
  date: Date;
  time: string;
};

type FormattedMessages = {
  date: string;
  messages: MessageType[];
};

const oneDay = 1000 * 60 * 60 * 24;
const currentTime: number = new Date().getTime();

const initialMessages = [
  {
    userId: 1,
    text: "Hi!",
    date: new Date(currentTime - oneDay * 4),
  },
  {
    userId: 1,
    text: "How are u",
    date: new Date(currentTime - oneDay * 2),
  },
  {
    userId: 2,
    text: "Hey!",
    date: new Date(currentTime - oneDay * 3),
  },
  {
    userId: 2,
    text: "Fine what about u?",
    date: new Date(currentTime - oneDay * 2),
  },
  {
    userId: 1,
    text: "everything is all right!",
    date: new Date(currentTime - oneDay * 2 - 1000 * 700),
  },
  {
    userId: 2,
    text: "What are u doing?",
    date: new Date(currentTime - oneDay * 2 - 1000 * 500),
  },
  {
    userId: 1,
    text: "kinda busy",
    date: new Date(currentTime - oneDay * 2 - 1000 * 100),
  },
  {
    userId: 1,
    text: "writing a chat",
    date: new Date(currentTime - oneDay * 2 - 1000 * 90),
  },
  {
    userId: 2,
    text: "WOW!",
    date: new Date(currentTime - oneDay * 2),
  },
  {
    userId: 2,
    text: "Great keep going",
    date: new Date(currentTime - oneDay * 2),
  },
];

const week_days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUNE",
  "JULY",
  "AUG",
  "SEPT",
  "OCT",
  "NOV",
  "DEC",
];

const Chat = (): JSX.Element => {
  const [formattedMessages, setFormattedMessages] = useState<
    FormattedMessages[]
  >([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const [chatMemberInfo, setChatMemberInfo] = useState<UserInfo>({
    name: "",
    picture: "",
    id: 0,
  });

  const scrollView = useRef<RefObject<ScrollView> & ScrollView>(null);

  const user = {
    id: 1,
    name: "Narek",
    picture:
      "https://wallpapers.com/images/hd/cool-neon-hoodie-profile-picture-vt4w54fxrvenydvu.jpg",
  };

  useEffect(() => {
    initialMessages.sort((a, b) => a.date.getTime() - b.date.getTime());

    let messagesTemp: MessageType[] = [];

    const MessagesFormat = initialMessages.reduce((acc, message, index) => {
      const weekDay = week_days[message.date.getDay()];
      const month = months[message.date.getMonth()];
      const day = message.date.getDate();

      let isOneDayPassed = false;
      let message_time = `${message.date.getHours()}:${
        message.date.getMinutes() <= 9
          ? "0" + message.date.getMinutes()
          : message.date.getMinutes()
      }`;

      if (
        message.date.getDate() !== new Date().getDate() &&
        message.date.getTime() !== new Date().getTime()
      ) {
        isOneDayPassed = true;
      }

      if (
        message.date.getTime() >= new Date().getTime() - 1000 * 60 &&
        message.date.getTime() < new Date().getTime() + 1000 * 60
      ) {
        message_time = "now";
      }

      messagesTemp.push({
        date: message.date,
        time: message_time,
        text: message.text,
        userId: message.userId,
      });

      if (!isOneDayPassed && index !== initialMessages.length - 1) return acc;

      const newMessages = {
        date: `${weekDay}, ${month} ${day}TH`,
        messages: messagesTemp,
      };

      messagesTemp = [];

      return [...acc, newMessages];
    }, []);

    setFormattedMessages(MessagesFormat);
    setChatMemberInfo({
      id: 2,
      name: "Acquavella",
      picture:
        "https://wallpapers.com/images/hd/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf.jpg",
    });

    scrollView.current.scrollToEnd({ animated: true });
  }, []);

  const handleSend = () => {
    if (newMessage) {
      const currentDate = new Date();
      const weekDay = week_days[currentDate.getDay()];
      const month = months[currentDate.getMonth()];
      const day = currentDate.getDate();
      let message_time = "now";
      let previousFormattedMessage = null;
      let newFormattedMessage = {
        date: currentDate,
        time: message_time,
        text: newMessage,
        userId: user.id,
      };

      if (formattedMessages.length) {
        previousFormattedMessage =
          formattedMessages[formattedMessages.length - 1].messages;
      }

      const previousMessage: MessageType =
        formattedMessages[formattedMessages.length - 1].messages[
          previousFormattedMessage.length - 1
        ];

      if (
        previousMessage &&
        previousMessage.date.getDate() !== currentDate.getDate() &&
        previousMessage.date.getTime() !== currentDate.getTime()
      ) {
        setFormattedMessages([
          ...formattedMessages,
          {
            date: `${weekDay}, ${month} ${day}TH`,
            messages: [newFormattedMessage],
          },
        ]);
      } else {
        setFormattedMessages(
          formattedMessages.map((elem: FormattedMessages, index: number) => {
            if (index === formattedMessages.length - 1) {
              return {
                ...elem,
                messages: [...elem.messages, newFormattedMessage],
              };
            }

            return elem;
          })
        );
      }
    }

    scrollView.current.scrollToEnd({ animated: true });
    setNewMessage("");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.messages} ref={scrollView}>
        {formattedMessages.map((message: FormattedMessages, index: number) => {
          return (
            <View key={message.date + index}>
              <Text style={styles.date}>{message.date}</Text>
              {message.messages.map((message: MessageType, ind: number) => (
                <Message
                  key={message.text + ind}
                  text={message.text}
                  time={message.time}
                  isMine={message.userId === user.id}
                  userInfo={message.userId === user.id ? user : chatMemberInfo}
                />
              ))}
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Aa"
          value={newMessage}
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          onChangeText={(newMessage) => setNewMessage(newMessage)}
          onSubmitEditing={handleSend}
        />
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    marginBottom: 70,
    backgroundColor: "#ffffff",
  },
  messages: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
    paddingHorizontal: 10,
    marginTop: 20,
  },
  date: {
    fontSize: 12,
    color: "#A3A3A3",
    marginTop: 3,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "300",
  },
  title: {
    fontWeight: "300",
    fontSize: 10,
    lineHeight: 14,
    color: "#333333",
    marginTop: 10,
  },
  inputContainer: {
    paddingHorizontal: 10,
    backgroundColor: "transparent",
    width: "100%",
  },
  input: {
    backgroundColor: "#EAEAEA",
    borderRadius: 70,
    height: 40,
    marginBottom: 10,
    paddingLeft: 10,
  },
});
