import { NavProp } from '../navigation/routes';
import React from 'react';
import useChatsListViewModel from '../view-models/chats-list-view-model';
import LoadingLayoutComponent from '../components/shared/LoadingLayoutComponent';
import ChatsListComponent from '../components/chat/ChatsListComponent';
import { StyleSheet, Text, View } from 'react-native';
import { BACKGROUND_COLOR, TITLE_FONT_SIZE } from '../utils/styles';

const MY_CHATS_TITLE = 'Мои чаты';

interface ChatsListScreenProps {
  navigation: NavProp;
}

const ChatsListScreen: React.FC<ChatsListScreenProps> = ({ navigation }) => {
  const { loading, chatsList } = useChatsListViewModel();
  return (
    <LoadingLayoutComponent loading={loading}>
      <View style={styles.container}>
        <Text style={styles.title}>{MY_CHATS_TITLE}</Text>
        <ChatsListComponent chats={chatsList} navigation={navigation} />
      </View>
    </LoadingLayoutComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 20,
    paddingBottom: 0,
    backgroundColor: BACKGROUND_COLOR,
  },
  title: {
    marginTop: 60,
    fontSize: TITLE_FONT_SIZE,
    textAlign: 'center',
    marginBottom: 40,
  },
});

export default ChatsListScreen;
