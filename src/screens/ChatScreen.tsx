import React from 'react';
import { RootStackParamList } from '../navigation/routes';
import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import LoadingLayoutComponent from '../components/shared/LoadingLayoutComponent';
import useChatViewModel from '../view-models/chat-view-model';
import MessagesListComponent from '../components/message/MessagesListComponents';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BACKGROUND_COLOR, IMAGE_SIZE, SMALL_IMAGE_SIZE } from '../utils/styles';
import InputComponent from '../components/shared/InputComponent';

const GO_BACK_BUTTON = 'Назад';
const MESSAGE_INPUT_PLACEHOLDER = 'Введите сообщение...';

type ChatScreenProps = NativeStackScreenProps<RootStackParamList, 'ChatScreen'>;

const ChatScreen: React.FC<ChatScreenProps> = ({ navigation, route }) => {
  const partner = route.params.user;
  const { loading, messages } = useChatViewModel(partner.id);
  return (
    <View style={styles.container}>
      <View style={styles.partnerInfoContainer}>
        <Pressable style={styles.goBackContainer} onPress={() => navigation.goBack()}>
          <Image style={styles.goBackIcon} source={require('../../assets/icons/arrow_back.png')} />
          <Text>{GO_BACK_BUTTON}</Text>
        </Pressable>
        <View style={styles.partnerProfileContainer}>
          <Text style={styles.username}>{partner.name}</Text>
          <Image style={styles.avatar} source={require('../../assets/favicon.png')} />
        </View>
      </View>
      <LoadingLayoutComponent loading={loading}>
        <View style={styles.messagesContainer}>
          <MessagesListComponent messages={messages} />
        </View>
      </LoadingLayoutComponent>
      <View style={styles.input}>
        <InputComponent
          width={'80%'}
          placeholder={MESSAGE_INPUT_PLACEHOLDER}
          onChangeText={() => {}}
        />
        <Image style={styles.sendIcon} source={require('../../assets/icons/send.png')} />
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    padding: 15,
  },
  partnerInfoContainer: {
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  goBackContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  goBackIcon: {
    width: IMAGE_SIZE,
    aspectRatio: 1,
  },
  sendIcon: {
    width: '15%',
    aspectRatio: 1,
  },
  partnerProfileContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  avatar: {},
  username: {},
});

export default ChatScreen;
