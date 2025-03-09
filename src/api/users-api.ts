import { UserDto } from '../dto/user-dto';
import { STUB_RESPONSE_DURATION_MS, STUB_USERS } from '../utils/consts';

export const usersApi = {
  getUsers(): Promise<UserDto[]> {
    return new Promise((resolve) => setTimeout(() => resolve(STUB_USERS), STUB_RESPONSE_DURATION_MS));
  },
};
