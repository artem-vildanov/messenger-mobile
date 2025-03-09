import { Image, View } from 'react-native';

interface AvatarProps {
  avatarUrl?: string;
}

const AvatarComponent: React.FC<AvatarProps> = ({ avatarUrl }) => {
  return (
    <View>
      <Image style={styles} source={require('../../../assets/icon.png')} />
    </View>
  );
};

const styles = {
  width: 100,
  height: 100,
};

export default AvatarComponent
