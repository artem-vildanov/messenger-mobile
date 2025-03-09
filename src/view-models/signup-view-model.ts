import { useEffect, useState } from 'react';
import {
  passwordValidatorFunc,
  newRepeatedPasswordValidatorFunc,
  usernameValidatorFunc,
  Validator,
  ValidatorType,
} from '../utils/validators';
import authApi from '../api/auth-api';
import { NavProp } from '../navigation/routes';

export default function useSignupViewModel(
  navigation: NavProp,
  triggerRepeatedPasswordValidation: () => void,
) {
  const [formInvalid, setFormInvalid] = useState(false);
  const [usernameInvalid, setUsernameInvalid] = useState(false);
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [repeatedPasswordInvalid, setRepeatedPasswordInvalid] = useState(false);

  useEffect(
    () => setFormInvalid(usernameInvalid || passwordInvalid || repeatedPasswordInvalid),
    [usernameInvalid, passwordInvalid, repeatedPasswordInvalid],
  );

  const [loading, setLoading] = useState(false)
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [_, setRepeatedPassword] = useState<string>('');

  const usernameValidator: Validator = {
    validatorFunc: usernameValidatorFunc,
    validatorType: ValidatorType.OnBlur,
    handleValidationResult: (result) => setUsernameInvalid(result !== null),
  };

  const passwordValidator: Validator = {
    validatorFunc: (newPassword): string | null => {
      triggerRepeatedPasswordValidation();
      return passwordValidatorFunc(newPassword);
    },
    validatorType: ValidatorType.OnBlur,
    handleValidationResult: (result) => setPasswordInvalid(result !== null),
  };

  const repeatedPasswordValidator: Validator = {
    validatorType: ValidatorType.OnBlur,
    validatorFunc: newRepeatedPasswordValidatorFunc(() => password),
    handleValidationResult: (result) => setRepeatedPasswordInvalid(result !== null),
  };

  const signup = () => {
    setLoading(true)
    authApi.signup({ username, password })
      .then((_) => navigation.navigate('ChatsListScreen'))
      .finally(() => setLoading(false))
  };

  return {
    loading,
    setUsername,
    setPassword,
    setRepeatedPassword,
    usernameValidator,
    passwordValidator,
    repeatedPasswordValidator,
    formInvalid,
    signup,
  };
}
