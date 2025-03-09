import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './routes';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import ChatsListScreen from '../screens/ChatsListScreen';
import LogoutScreen from '../screens/LogoutScreen';
import UsersListScreen from '../screens/UsersListScreen';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GRAY_COLOR, REGULAR_FONT_SIZE, THIN_FONT_WEIGHT } from '../utils/styles';
import NavbarButtonComponent from '../components/shared/NavbarButtonComponent';
import ChatScreen from '../screens/ChatScreen';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          return <NavbarButtonComponent componentName={route.name} />;
        },
        tabBarLabel: '',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: GRAY_COLOR,
          display: 'flex',
          height: '10%',
          justifyContent: 'center',
          alignItems: 'center',
          borderTopWidth: 0,
        },
        tabBarItemStyle: {
          marginTop: 10,
        },
      })}
    >
      <Tab.Screen name="ChatsListScreen" component={ChatsListScreen} />
      <Tab.Screen name="UsersListScreen" component={UsersListScreen} />
      <Tab.Screen name="LogoutScreen" component={LogoutScreen} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="MainApp" component={TabNavigation} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    flex: 1,
  },
});
