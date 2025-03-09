import InputComponent, { InputRef } from '../components/shared/InputComponent';
import ButtonComponent from '../components/shared/ButtonComponent';
import LinkComponent from '../components/shared/LinkComponent';
import React, { useRef } from 'react';
import useSignupViewModel from '../view-models/signup-view-model';
import { NavProp } from '../navigation/routes';
import LoadingLayoutComponent from '../components/shared/LoadingLayoutComponent';
import { StyleSheet, Text, View } from 'react-native';
import { BACKGROUND_COLOR, THIN_FONT_WEIGHT, TITLE_FONT_SIZE } from '../utils/styles';

const SIGNUP_TITLE = 'Регистрация';
const USERNAME_PLACEHOLDER = 'Имя пользователя';
const PASSWORD_PLACEHOLDER = 'Пароль';
const REPEAT_PASSWORD_PLACEHOLDER = 'Повторите пароль';
const SIGNUP_BUTTON = 'Создать аккаунт';
const HAS_ACCOUNT_LINK = 'Уже есть аккаунт?';

interface SignupScreenProps {
  navigation: NavProp;
}

const SignupScreen: React.FC<SignupScreenProps> = ({ navigation }) => {
  const repeatedPasswordInputRef = useRef<InputRef>(null);
  const {
    loading,
    setUsername,
    setPassword,
    setRepeatedPassword,
    usernameValidator,
    passwordValidator,
    repeatedPasswordValidator,
    signup,
    formInvalid,
  } = useSignupViewModel(navigation, () => repeatedPasswordInputRef.current?.validate());

  return (
    <LoadingLayoutComponent loading={loading}>
      <View style={styles.container}>
        <Text style={styles.title}>{SIGNUP_TITLE}</Text>
        <InputComponent
          placeholder={USERNAME_PLACEHOLDER}
          onChangeText={setUsername}
          validator={usernameValidator}
        ></InputComponent>
        <InputComponent
          secureTextEntry={true}
          placeholder={PASSWORD_PLACEHOLDER}
          onChangeText={setPassword}
          validator={passwordValidator}
        ></InputComponent>
        <InputComponent
          secureTextEntry={true}
          ref={repeatedPasswordInputRef}
          placeholder={REPEAT_PASSWORD_PLACEHOLDER}
          onChangeText={setRepeatedPassword}
          validator={repeatedPasswordValidator}
        ></InputComponent>
        <View style={styles.buttonsContainer}>
          <ButtonComponent
            title={SIGNUP_BUTTON}
            onPress={signup}
            disabled={formInvalid}
          ></ButtonComponent>
          <LinkComponent
            title={HAS_ACCOUNT_LINK}
            onPress={() => navigation.navigate('LoginScreen')}
          ></LinkComponent>
        </View>
      </View>
    </LoadingLayoutComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: BACKGROUND_COLOR,
    padding: 40,
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  title: {
    fontSize: TITLE_FONT_SIZE,
    fontWeight: THIN_FONT_WEIGHT,
    marginBottom: 10,
  },
  buttonsContainer: {
    alignItems: 'flex-start',
    marginTop: 20,
    width: '100%',
    gap: 10,
  },
  button: {
    marginBottom: 10,
  },
});

export default SignupScreen;
