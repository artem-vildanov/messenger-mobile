import { MessageModel } from "../models/message-model"

export interface MessageDto {
  id: number
  senderId: number
  receiverId: number
  text: string
  createdAt: string
}

export function mapToModel(message: MessageDto, myId: number): MessageModel {
  return {
    id: message.id,
    senderId: message.senderId,
    receiverId: message.receiverId,
    text: message.text,
    sentAt: message.createdAt.replace(/-/g, '/'),
    isMy: message.senderId === myId
  }
}
