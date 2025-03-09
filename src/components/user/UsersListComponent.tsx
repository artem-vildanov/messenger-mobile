import { FlatList, StyleSheet, Text, View } from 'react-native';
import { UserModel } from '../../models/user-model';
import { NavProp } from '../../navigation/routes';
import UserComponent from './UserComponent';
import { newOpenChatFunc } from '../../navigation/navigation-funcs';

interface UsersListProps {
  users: UserModel[];
  navigation: NavProp;
}

const UsersListComponent: React.FC<UsersListProps> = ({ users, navigation }) => {
  return (
    <FlatList
      data={users}
      renderItem={(user) => (
        <View style={styles.listItem}>
        <UserComponent user={user.item} openChat={newOpenChatFunc(user.item, navigation)} />
        </View>
      )}
      keyExtractor={(user) => String(user.id)}
    />
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginBottom: 10,
  },
});

export default UsersListComponent
