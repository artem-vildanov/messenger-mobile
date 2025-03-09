import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { BACKGROUND_COLOR } from '../../utils/styles';

interface LoadingLayoutProps {
  children: React.ReactNode;
  loading: boolean;
}

const LoadingLayoutComponent: React.FC<LoadingLayoutProps> = ({ children, loading }) => {
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <>{children}</>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOR,
  }
});

export default LoadingLayoutComponent;
