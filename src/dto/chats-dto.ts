import { ChatModel } from '../models/chat-model';
import { formatDate } from '../utils/formatting';

export interface ChatDto {
  userId: number;
  username: string;
  lastMessageText: string;
  lastMessageDate: string;
}

export function mapToModel(dto: ChatDto): ChatModel {
  return {
    id: dto.userId,
    name: dto.username,
    lastMessageText: dto.lastMessageText,
    lastMessageDate: formatDate(dto.lastMessageDate),
  };
}
