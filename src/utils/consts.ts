import { ChatDto } from '../dto/chats-dto';
import { MessageDto } from '../dto/messages-dto';
import { UserDto } from '../dto/user-dto';

export const STUB_RESPONSE_DURATION_MS = 1000;

export const STUB_AUTH_USER: UserDto = {
  id: 111,
  username: 'TestUser1',
};

export const STUB_USER2: UserDto = {
  id: 222,
  username: 'TestUser2',
};

export const STUB_USER3: UserDto = {
  id: 333,
  username: 'TestUser3',
};

export const STUB_USER4: UserDto = {
  id: 444,
  username: 'TestUser4',
};

export const STUB_USER5: UserDto = {
  id: 555,
  username: 'TestUser5',
};

export const STUB_USERS: UserDto[] = [
  STUB_USER2,
  STUB_USER3,
  STUB_USER4,
  STUB_USER5,
]

export const STUB_MESSAGES: MessageDto[] = [
  {
    id: 111,
    senderId: 111,
    receiverId: 222,
    text: 'qwerqwerqwerqwerqwerqwer qwerqwe qwerwr werwerwrwer werwer',
    createdAt: '02-01-2025 15:04',
  },
  {
    id: 222,
    senderId: 111,
    receiverId: 222,
    text: 'qwerqwerqwerqwerqwerqwer daw d qwerqwe qwerwr werwerwrwer werwer',
    createdAt: '02-01-2025 15:14',
  },
  {
    id: 333,
    senderId: 222,
    receiverId: 111,
    text: 'ladkjak qwerqwe qwerwr werwerwrwer werwer',
    createdAt: '02-01-2025 15:18',
  },
  {
    id: 444,
    senderId: 111,
    receiverId: 222,
    text: 'qwerqwerqwerqwerqwerqwer qwerqwe qwerwr werwerwrwer werwer',
    createdAt: '02-01-2025 15:09',
  },
  {
    id: 555,
    senderId: 111,
    receiverId: 222,
    text: 'qwerqwerqwerqwerqwerqwer qwerqwe qwerwr werwerwrwer werwer',
    createdAt: '02-01-2025 16:14',
  },
  {
    id: 666,
    senderId: 222,
    receiverId: 111,
    text: 'qwerqwerqwerqwerqwerqwer qwerqwe qwerwr werwerwrwer werwer',
    createdAt: '02-01-2025 14:14',
  },
];

export const STUB_CHATS: ChatDto[] = [
  {
    userId: STUB_USER3.id,
    username: STUB_USER3.username,
    lastMessageText: 'jbhsbdvhj shdbvjs shdhsj',
    lastMessageDate: '09-03-2025 16:14',
  },
  {
    userId: STUB_USER4.id,
    username: STUB_USER4.username,
    lastMessageText: 'jbhsbdvhj shdbvjs shdhsj',
    lastMessageDate: '08-03-2025 16:14',
  },
  {
    userId: STUB_USER2.id,
    username: STUB_USER2.username,
    lastMessageText: 'qwerqwerqwerqwerqwerqwer qwerqwe qwerwr werwerwrwer werwer',
    lastMessageDate: '02-01-2025 16:14',
  },
  {
    userId: STUB_USER5.id,
    username: STUB_USER5.username,
    lastMessageText: 'jbh shdbvjs shdhsj dakwjndjaw ajwdjawd ajwdnakwdjnawkdjna fkjsnefkjn jsefksefjns',
    lastMessageDate: '01-03-2025 16:14',
  },
];
