export interface MessageModel {
  id: number;
  text: string;
  sentAt: string;
  senderId: number;
  receiverId: number;
  isMy: boolean;
}
