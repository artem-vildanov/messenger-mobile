import { UserModel } from "../models/user-model"

export interface UserDto {
  id: number
  username: string
}

export function mapToModel(dto: UserDto): UserModel {
  return {
    id: dto.id,
    name: dto.username
  }
}
