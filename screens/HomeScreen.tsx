import { Image, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import Pin from '../components/Pin';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Pin title={'Title'} image={''} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
