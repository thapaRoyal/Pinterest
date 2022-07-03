import { Image, Text, View, StyleSheet } from 'react-native';

const Pin = () => {
  return (
    <View style={styles.pin}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg',
        }}
        style={styles.image}
      />
      <Text style={styles.title}>notJust Hoodie</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pin: {
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 25,
  },
});

export default Pin;
