import { Pressable, Text, View, StyleSheet } from 'react-native';
import { BLUE_COLOR } from '../../utils/styles';

interface LinkProps {
  title: string;
  onPress: () => void;
}

const LinkComponent: React.FC<LinkProps> = ({ title, onPress }) => {
  return (
    <View>
      <Pressable onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: BLUE_COLOR,
    fontSize: 16,
    fontWeight: '300',
    textDecorationLine: 'underline',
  },
});

export default LinkComponent
