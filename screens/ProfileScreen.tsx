import { Image, StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/avatar.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>thapaRoyal</Text>
      <Text style={styles.subtitle}>777k followers | 23 Followings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
  },
  subtitle: {
    color: '#181818',
    fontWeight: '600',
  },
  image: {
    height: 200,
    aspectRatio: 1,
    borderRadius: 200,
  },
});
