import React from 'react';
import { RootStackParamList } from '../navigation/routes';
import { Button, StyleSheet, Text, View } from 'react-native';
import LoadingLayoutComponent from '../components/shared/LoadingLayoutComponent';
import useChatViewModel from '../view-models/chat-view-model';
import MessagesListComponent from '../components/message/MessagesListComponents';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BACKGROUND_COLOR } from '../utils/styles';
import InputComponent from '../components/shared/InputComponent';

const GO_BACK_BUTTON = 'Назад';
const MESSAGE_INPUT_PLACEHOLDER = 'Введите сообщение...';

type ChatScreenProps = NativeStackScreenProps<RootStackParamList, 'ChatScreen'>;

const ChatScreen: React.FC<ChatScreenProps> = ({ navigation, route }) => {
  const partner = route.params.user;
  const { loading, messages } = useChatViewModel(partner.id);
  return (
    <View style={styles.container}>
      <Button title={GO_BACK_BUTTON} onPress={() => navigation.goBack()} />
      <Text>{partner.name}</Text>
      <LoadingLayoutComponent loading={loading}>
        <View style={styles.messagesContainer}>
          <MessagesListComponent messages={messages} />
        </View>
      </LoadingLayoutComponent>
      <View style={styles.input}>
        <InputComponent placeholder={MESSAGE_INPUT_PLACEHOLDER} onChangeText={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND_COLOR,
    height: '100%',
    // padding: 20,
  },
  messagesContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  input: {
    margin: 20,
  },
});

export default ChatScreen;
