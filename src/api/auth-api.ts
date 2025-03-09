import { AuthRequestDto, AuthResponseDto } from '../dto/auth-dto';
import { STUB_AUTH_USER, STUB_RESPONSE_DURATION_MS } from '../utils/consts';

const authApi = {
  login(dto: AuthRequestDto): Promise<AuthResponseDto> {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ userId: STUB_AUTH_USER.id }), STUB_RESPONSE_DURATION_MS);
    });
  },

  signup(dto: AuthRequestDto): Promise<AuthResponseDto> {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ userId: STUB_AUTH_USER.id }), STUB_RESPONSE_DURATION_MS);
    });
  },
};

export default authApi;
