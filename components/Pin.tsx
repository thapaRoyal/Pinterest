import { Image, Text, View, StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useNhostClient } from '@nhost/react';

const Pin = (props) => {
  const [ratio, setRatio] = useState(1);
  const [imageUri, setImageUri] = useState('');

  const nhost = useNhostClient();

  const { id, image, title } = props.pin;
  const navigation = useNavigation();

  const fetchImage = async () => {
    const result = await nhost.storage.getPresignedUrl({
      fileId: image,
    });
    if (result.presignedUrl?.url) {
      setImageUri(result.presignedUrl?.url);
    }
    console.log(result);
  };

  useEffect(() => {
    fetchImage();
  }, [image]);

  useEffect(() => {
    if (imageUri) {
      Image.getSize(imageUri, (width, height) => setRatio(width / height));
    }
  }, [imageUri]);

  const onLike = () => {};

  const goToPinPage = () => {
    navigation.navigate('Pin', { id });
  };

  return (
    <Pressable onPress={goToPinPage} style={styles.pin}>
      <View>
        <Image
          source={{
            uri: imageUri,
          }}
          style={[styles.image, { aspectRatio: ratio }]}
        />

        <Pressable onPress={onLike} style={styles.heartBtn}>
          <AntDesign name="hearto" size={16} color="black" />
        </Pressable>
      </View>

      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pin: {
    width: '100%',
    padding: 4,
  },
  title: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '600',
    margin: 10,
    color: '#181818',
  },
  image: {
    width: '100%',
    borderRadius: 15,
  },
  heartBtn: {
    backgroundColor: '#d3cfd4',
    position: 'absolute',
    bottom: 10,
    right: 10,
    padding: 5,
    borderRadius: 50,
  },
});

export default Pin;
