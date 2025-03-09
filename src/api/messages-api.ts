import { MessageDto } from "../dto/messages-dto";
import { STUB_MESSAGES, STUB_RESPONSE_DURATION_MS } from "../utils/consts";

export const messagesApi = {
  getChatMessages(partnerId: number): Promise<MessageDto[]> {
    return new Promise(resolve => setTimeout(() => resolve(STUB_MESSAGES), STUB_RESPONSE_DURATION_MS))
  }
}
