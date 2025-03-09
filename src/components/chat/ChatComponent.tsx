import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { ChatModel } from '../../models/chat-model';
import {
  BORDER_RADIUS,
  DARK_GRAY_COLOR,
  GRAY_COLOR,
  IMAGE_SIZE,
  REGULAR_FONT_SIZE,
  SMALL_FONT_SIZE,
} from '../../utils/styles';

interface ChatProps {
  chat: ChatModel;
  openChat: () => void;
}

const ChatComponent: React.FC<ChatProps> = ({ chat, openChat }) => {
  return (
    <Pressable style={styles.container} onPress={openChat}>
      <Image style={styles.image} source={require('../../../assets/favicon.png')} />
      <View style={styles.infoContainer}>
        <View style={styles.nameAndDate}>
          <Text style={styles.username}>{chat.name}</Text>
          <Text style={styles.date}>{chat.lastMessageDate}</Text>
        </View>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.message}>
          {chat.lastMessageText}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    gap: 10,
    borderRadius: BORDER_RADIUS,
    backgroundColor: GRAY_COLOR,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: IMAGE_SIZE,
    aspectRatio: 1,
  },
  nameAndDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoContainer: {
    width: '70%',
  },
  username: {
    color: 'black',
    fontSize: REGULAR_FONT_SIZE,
  },
  message: {
    color: DARK_GRAY_COLOR,
    fontSize: SMALL_FONT_SIZE,
    overflow: 'hidden',
  },
  date: {
    color: DARK_GRAY_COLOR,
    fontSize: SMALL_FONT_SIZE,
  },
});

export default ChatComponent;
