import { FlatList } from 'react-native-gesture-handler';
import { MessageModel } from '../../models/message-model';
import MessageComponent from './MessageComponent';
import { StyleSheet, View } from 'react-native';

interface MessagesListProps {
  messages: MessageModel[];
}

const MessagesListComponent: React.FC<MessagesListProps> = ({ messages }) => {
  return (
    <FlatList
      data={messages}
      renderItem={(message) => (
        <View style={styles.listItem}>
          <MessageComponent message={message.item} />
        </View>
      )}
      keyExtractor={(message) => String(message.id)}
    />
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginBottom: 10,
  },
});

export default MessagesListComponent;
