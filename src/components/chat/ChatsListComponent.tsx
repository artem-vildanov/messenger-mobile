import React from 'react';
import { ChatModel } from '../../models/chat-model';
import { FlatList, StyleSheet, View } from 'react-native';
import ChatComponent from './ChatComponent';
import { NavProp } from '../../navigation/routes';
import { newOpenChatFunc } from '../../navigation/navigation-funcs';

interface ChatsListProps {
  chats: ChatModel[];
  navigation: NavProp;
}

const ChatsListComponent: React.FC<ChatsListProps> = ({ chats, navigation }) => {
  return (
    <FlatList
      data={chats}
      renderItem={(chat) => (
        <View style={styles.listItem}>
          <ChatComponent
            chat={chat.item}
            openChat={newOpenChatFunc(chat.item, navigation)}
          ></ChatComponent>
        </View>
      )}
      keyExtractor={(chat) => String(chat.id)}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginBottom: 10,
  },
});

export default ChatsListComponent;
