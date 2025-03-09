export enum ValidatorType {
  OnBlur,
  OnChange,
  OnNever,
}

export type ValidatorFunc = (text: string) => string | null;
export type ValidationResultHandler = (result: string | null) => void;

export interface Validator {
  validatorType: ValidatorType;
  validatorFunc: ValidatorFunc;
  handleValidationResult: ValidationResultHandler;
}

export const emptyValidator: Validator = {
  validatorFunc: (_: string): string | null => null,
  validatorType: ValidatorType.OnNever,
  handleValidationResult: (_) => {},
};

const MIN_USERNAME_LENGTH = 3;
const MAX_USERNAME_LENGTH = 50;

const MIN_PASSWORD_LENGTH = 5;
const MAX_PASSWORD_LENGTH = 50;

function shouldBeMoreThan(amount: number): string {
  return 'Должно быть больше, чем ' + String(amount);
}

function shouldBeLessThan(amount: number): string {
  return 'Должно быть меньше, чем ' + String(amount);
}

export const usernameValidatorFunc: ValidatorFunc = (username: string): string | null => {
  if (username.length < MIN_USERNAME_LENGTH) {
    return shouldBeMoreThan(MIN_USERNAME_LENGTH);
  }

  if (username.length > MAX_USERNAME_LENGTH) {
    return shouldBeLessThan(MAX_USERNAME_LENGTH);
  }

  return null;
};

export const passwordValidatorFunc: ValidatorFunc = (password: string): string | null => {
  if (password.length < MIN_PASSWORD_LENGTH) {
    return shouldBeMoreThan(MIN_PASSWORD_LENGTH);
  }

  if (password.length > MAX_PASSWORD_LENGTH) {
    return shouldBeLessThan(MAX_PASSWORD_LENGTH);
  }

  return null;
};

export const newRepeatedPasswordValidatorFunc = (password: () => string): ValidatorFunc => {
  return (repeatedPassword: string): string | null => {
    if (repeatedPassword !== password()) {
      return 'Пароли отличаются';
    }

    return null;
  };
};
