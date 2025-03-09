import React from 'react';
import { NavProp } from '../navigation/routes';
import { useUsersViewModel } from '../view-models/users-view-model';
import LoadingLayoutComponent from '../components/shared/LoadingLayoutComponent';
import { StyleSheet, Text, View } from 'react-native';
import { BACKGROUND_COLOR, TITLE_FONT_SIZE } from '../utils/styles';
import UsersListComponent from '../components/user/UsersListComponent';

const USERS_TITLE = 'Пользователи';

interface UsersListProps {
  navigation: NavProp;
}

const UsersListScreen: React.FC<UsersListProps> = ({ navigation }) => {
  const { loading, users } = useUsersViewModel();
  return (
    <LoadingLayoutComponent loading={loading}>
      <View style={styles.container}>
        <Text style={styles.title}>{USERS_TITLE}</Text>
        <UsersListComponent users={users} navigation={navigation} />
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

export default UsersListScreen;
