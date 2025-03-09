import { StackNavigationProp } from "@react-navigation/stack";
import { UserModel } from "../models/user-model";

export type RootStackParamList = {
  MainApp: undefined;
  SignupScreen: undefined;
  LoginScreen: undefined;
  ChatsListScreen: undefined;
  ChatScreen: { user: UserModel }
  UsersListScreen: undefined;
  LogoutScreen: undefined;
};

export type NavProp = StackNavigationProp<RootStackParamList>

// export type SignupScreenNavProp = StackNavigationProp<RootStackParamList, 'SignupScreen'>
// export type LoginScreenNavProp = StackNavigationProp<RootStackParamList, 'LoginScreen'>
// export type ChatsListScreenNavProp = StackNavigationProp<RootStackParamList, 'ChatsListScreen'>
// export type ChatScreenNavProp = StackNavigationProp<RootStackParamList, 'ChatScreen'>
// export type UsersListScreenNavProp = StackNavigationProp<RootStackParamList, 'UsersListScreen'>
// export type LogoutScreenNavProp = StackNavigationProp<RootStackParamList, 'LogoutScreen'>

