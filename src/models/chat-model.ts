import { UserModel } from "./user-model"

export interface ChatModel extends UserModel {
  lastMessageText: string
  lastMessageDate: string
}
