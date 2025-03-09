import { useEffect, useState } from 'react';
import { ChatModel } from '../models/chat-model';
import { chatsApi } from '../api/chats-api';
import { mapToModel } from '../dto/chats-dto';

export default function useChatsListViewModel() {
  const [chatsList, setChatsList] = useState<ChatModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    chatsApi
      .getMyChats()
      .then((chatDtos) => {
        setChatsList(chatDtos.map((dto) => mapToModel(dto)));
      })
      .finally(() => setLoading(false));
  }, []);

  return {
    loading,
    chatsList,
  };
}
