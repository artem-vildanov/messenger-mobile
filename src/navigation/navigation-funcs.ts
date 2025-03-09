import { UserModel } from '../models/user-model';
import { NavProp } from './routes';

type OpenChatFunc = () => void;

export function newOpenChatFunc(user: UserModel, navigation: NavProp): OpenChatFunc {
  return () => navigation.navigate('ChatScreen', { user });
}

