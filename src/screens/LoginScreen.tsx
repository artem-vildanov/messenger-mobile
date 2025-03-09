import InputComponent from '../components/shared/InputComponent';
import ButtonComponent from '../components/shared/ButtonComponent';
import useLoginViewModel from '../view-models/login-view-model';
import LinkComponent from '../components/shared/LinkComponent';
import React from 'react';
import { NavProp } from '../navigation/routes';
import LoadingLayoutComponent from '../components/shared/LoadingLayoutComponent';
import { StyleSheet, Text, View } from 'react-native';
import { BACKGROUND_COLOR, THIN_FONT_WEIGHT, TITLE_FONT_SIZE } from '../utils/styles';

const LOGIN_TITLE = 'Логин';
const USERNAME_PLACEHOLDER = 'Имя пользователя';
const PASSWORD_PLACEHOLDER = 'Пароль';
const LOGIN_BUTTON = 'Войти';
const WIHTOUT_ACCOUNT_LINK = 'Еще нет аккаунта?';

interface LoginScreenProps {
  navigation: NavProp;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const {
    loading,
    setUsername,
    setPassword,
    usernameValidator,
    passwordValidator,
    formInvalid,
    login,
  } = useLoginViewModel(navigation);

  return (
    <LoadingLayoutComponent loading={loading}>
      <View style={styles.container}>
        <Text style={styles.title}>{LOGIN_TITLE}</Text>
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
        <View style={styles.buttonsContainer}>
          <ButtonComponent
            title={LOGIN_BUTTON}
            onPress={login}
            disabled={formInvalid}
          ></ButtonComponent>
          <LinkComponent
            title={WIHTOUT_ACCOUNT_LINK}
            onPress={() => navigation.navigate('SignupScreen')}
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

export default LoginScreen;
