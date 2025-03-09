import { useEffect, useState } from 'react';
import {
  passwordValidatorFunc,
  usernameValidatorFunc,
  Validator,
  ValidatorType,
} from '../utils/validators';
import authApi from '../api/auth-api';
import { NavProp } from '../navigation/routes';

export default function useLoginViewModel(navigation: NavProp) {
  const [formInvalid, setFormInvalid] = useState(false);
  const [usernameInvalid, setUsernameInvalid] = useState(false);
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [loading, setLoading] = useState(false)

  useEffect(
    () => setFormInvalid(usernameInvalid || passwordInvalid),
    [usernameInvalid, passwordInvalid],
  );

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const usernameValidator: Validator = {
    validatorFunc: usernameValidatorFunc,
    validatorType: ValidatorType.OnBlur,
    handleValidationResult: (result) => setUsernameInvalid(result !== null),
  };

  const passwordValidator: Validator = {
    validatorFunc: passwordValidatorFunc,
    validatorType: ValidatorType.OnBlur,
    handleValidationResult: (result) => setPasswordInvalid(result !== null),
  };

  const login = () => {
    setLoading(true)
    authApi.login({ username, password })
      .then(() => navigation.navigate('MainApp'))
      .finally(() => setLoading(false))
  }

  return {
    loading,
    setUsername,
    setPassword,
    usernameValidator,
    passwordValidator,
    formInvalid,
    login,
  };
}
