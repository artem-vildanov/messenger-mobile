import { ChatDto } from '../dto/chats-dto';
import { STUB_CHATS, STUB_RESPONSE_DURATION_MS } from '../utils/consts';

export const chatsApi = {
  getMyChats(): Promise<ChatDto[]> {
    return new Promise((resolve) =>
      setTimeout(() => resolve(STUB_CHATS), STUB_RESPONSE_DURATION_MS),
    );
  },
};
