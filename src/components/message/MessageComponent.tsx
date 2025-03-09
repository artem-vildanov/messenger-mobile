import { StyleSheet, Text, View } from 'react-native';
import { MessageModel } from '../../models/message-model';
import {
  BLUE_COLOR,
  BORDER_RADIUS,
  DARK_GRAY_COLOR,
  GRAY_COLOR,
  SMALL_FONT_SIZE,
  THIN_FONT_WEIGHT,
} from '../../utils/styles';

interface MessageProps {
  message: MessageModel;
}

const MessageComponent: React.FC<MessageProps> = ({ message }) => {
  return (
    <View style={[styles.container, message.isMy && styles.myMessageContainer]}>
      <Text style={[styles.text, message.isMy && styles.myMessageText]}>{message.text}</Text>
      <Text style={[styles.date, message.isMy && styles.myMessageText]}>{message.sentAt}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    maxWidth: '60%',
    borderRadius: BORDER_RADIUS,
    backgroundColor: GRAY_COLOR,
  },
  myMessageContainer: {
    alignSelf: 'flex-end',
    backgroundColor: BLUE_COLOR,
  },
  text: {
    color: 'black',
  },
  myMessageText: {
    color: 'white',
  },
  date: {
    fontWeight: THIN_FONT_WEIGHT,
    fontSize: SMALL_FONT_SIZE,
    color: DARK_GRAY_COLOR,
  },
});

export default MessageComponent;
