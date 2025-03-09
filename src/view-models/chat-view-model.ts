import { useEffect, useState } from 'react';
import { MessageModel } from '../models/message-model';
import { messagesApi } from '../api/messages-api';
import { mapToModel } from '../dto/messages-dto';
import { STUB_AUTH_USER } from '../utils/consts';

export default function useChatViewModel(userId: number) {
  const [messages, setMessages] = useState<MessageModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    messagesApi
      .getChatMessages(userId)
      .then((messages) =>
        setMessages(messages.map((message) => mapToModel(message, STUB_AUTH_USER.id))),
      )
      .finally(() => setLoading(false));
  });

  return {
    messages,
    loading,
  };
}
