import { Image, Text, View, StyleSheet } from 'react-native';

const Pin = (props) => {
  const { image, title } = props.pin;
  console.log(image);
  return (
    <View style={styles.pin}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{title}</Text>
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
