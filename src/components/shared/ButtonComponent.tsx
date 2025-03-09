import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { BORDER_RADIUS, REGULAR_FONT_SIZE } from '../../utils/styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

const ButtonComponent: React.FC<ButtonProps> = ({ title, onPress, disabled = false }) => {
  return (
    <Pressable
      // style={[styles.button, disabled && styles.disabled]}
      style={styles.button}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: BORDER_RADIUS,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: REGULAR_FONT_SIZE,
    fontWeight: 'regular',
  },
  disabled: {
    backgroundColor: '#A0A0A0',
  },
});

export default ButtonComponent;
