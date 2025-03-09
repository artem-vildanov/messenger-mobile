import { ReactNode } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { NavProp } from '../../navigation/routes';
import { REGULAR_FONT_SIZE, THIN_FONT_WEIGHT } from '../../utils/styles';

const icons = {
  logout: require('../../../assets/icons/logout.png'),
  chat: require('../../../assets/icons/chat.png'),
  users: require('../../../assets/icons/users.png'),
};

interface NavbarLayoutProps {
  children: ReactNode;
  navigation: NavProp;
}

interface NavbarButtonProps {
  icon: 'chat' | 'logout' | 'users';
}

export const NavbarButtonComponent: React.FC<NavbarButtonProps> = ({ icon }) => {
  return <Image style={buttonStyles.image} source={icons[icon]}></Image>;
};

const buttonStyles = StyleSheet.create({
  container: {},
  image: {
    width: 40,
    height: 40,
  },
  text: {
    fontSize: REGULAR_FONT_SIZE,
    fontWeight: THIN_FONT_WEIGHT,
  },
});

const NavbarLayoutComponent: React.FC<NavbarLayoutProps> = ({ children, navigation }) => {
  return (
    <View>
      <View style={navbarStyles.children}>{children}</View>
      <View style={navbarStyles.container}>
        <NavbarButtonComponent
          icon={'users'}
          navigate={() => navigation.navigate('UsersListScreen')}
        />
        <NavbarButtonComponent
          icon={'chat'}
          navigate={() => navigation.navigate('ChatsListScreen')}
        />
        <NavbarButtonComponent
          icon={'logout'}
          navigate={() => navigation.navigate('LogoutScreen')}
        />
      </View>
    </View>
  );
};

const navbarStyles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '10%',
    flexGrow: 1,
    flexShrink: 0,
    flexDirection: 'row',
    backgroundColor: 'blue',
  },
  children: {
    backgroundColor: 'red',
    height: '90%',
    flexGrow: 2,
    flexShrink: 0,
  },
});

export default NavbarLayoutComponent;
