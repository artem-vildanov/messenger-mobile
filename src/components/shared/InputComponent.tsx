import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import { emptyValidator, Validator, ValidatorType } from '../../utils/validators';
import { BORDER_RADIUS, GRAY_COLOR, REGULAR_FONT_SIZE, THIN_FONT_WEIGHT } from '../../utils/styles';

interface InputProps {
  placeholder?: string;
  value?: string;
  onChangeText: (text: string) => void;
  validator?: Validator;
  secureTextEntry?: boolean;
}

export interface InputRef {
  validate: () => void;
}

const InputComponent = forwardRef<InputRef, InputProps>(
  (
    {
      placeholder = '',
      value = '',
      onChangeText,
      validator = emptyValidator,
      secureTextEntry = false,
    },
    ref,
  ) => {
    const [validationResult, setValidationResult] = useState<string | null>(null);
    const [text, setText] = useState<string>(value);

    useImperativeHandle(ref, () => ({
      validate: () => setValidationResult(validator.validatorFunc(text)),
    }));

    useEffect(() => {
      validator.handleValidationResult(validationResult);
    }, [validationResult]);

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onChangeText={(text: string) => {
            onChangeText(text);
            setText(text);
            if (validator.validatorType === ValidatorType.OnChange) {
              setValidationResult(validator.validatorFunc(text));
            }
          }}
          onBlur={(_) => {
            if (validator.validatorType === ValidatorType.OnBlur) {
              setValidationResult(validator.validatorFunc(text));
            }
          }}
          secureTextEntry={secureTextEntry}
        />
        {validationResult && <Text>{validationResult}</Text>}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  input: {
    fontSize: REGULAR_FONT_SIZE,
    fontWeight: THIN_FONT_WEIGHT,
    backgroundColor: GRAY_COLOR,
    borderRadius: BORDER_RADIUS,
    padding: 10,
  },
});

export default InputComponent;
