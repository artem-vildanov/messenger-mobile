import { Image, StyleSheet } from "react-native";
import { REGULAR_FONT_SIZE, THIN_FONT_WEIGHT } from "../../utils/styles";
import { RootStackParamList } from "../../navigation/routes";

const icons = {
  logout: require('../../../assets/icons/logout.png'),
  chat: require('../../../assets/icons/chat.png'),
  users: require('../../../assets/icons/users.png'),
};

type Icon = 'logout' | 'chat' | 'users';

interface NavbarButtonProps {
  componentName:  keyof RootStackParamList
}

const NavbarButtonComponent: React.FC<NavbarButtonProps> = ({ componentName }) => {
  return (
    <Image style={buttonStyles.image} source={icons[getIconByComponent(componentName)]}></Image>
  );
};

function getIconByComponent(componentName: keyof RootStackParamList): Icon {
  switch (componentName) {
    case 'ChatsListScreen':
      return 'chat';
    case 'UsersListScreen':
      return 'users';
    case 'LogoutScreen':
      return 'logout';
    default:
      return 'chat';
  }
}

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

export default NavbarButtonComponent
