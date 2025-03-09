import React from 'react';
import { UserModel } from '../../models/user-model';
import { Image, StyleSheet, Text } from 'react-native';
import { Pressable } from 'react-native-gesture-handler';
import { BORDER_RADIUS, GRAY_COLOR, IMAGE_SIZE, REGULAR_FONT_SIZE } from '../../utils/styles';

interface UserProps {
  user: UserModel;
  openChat: () => void;
}

const UserComponent: React.FC<UserProps> = ({ user, openChat }) => {
  return (
    <Pressable style={styles.container} onPress={openChat}>
      <Image style={styles.image} source={require('../../../assets/favicon.png')} />
      <Text style={styles.username}>{user.name}</Text>
    </Pressable>
  );
};

export default UserComponent;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    gap: 10,
    borderRadius: BORDER_RADIUS,
    backgroundColor: GRAY_COLOR,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: IMAGE_SIZE,
    aspectRatio: 1,
  },
  username: {
    color: 'black',
    fontSize: REGULAR_FONT_SIZE,
  },
});
