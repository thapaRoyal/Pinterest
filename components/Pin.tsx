import { Image, Text, View, StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import RemoteImage from './RemoteImage';

const Pin = (props) => {
  const { id, image, title } = props.pin;
  const navigation = useNavigation();

  const onLike = () => {};

  const goToPinPage = () => {
    navigation.navigate('Pin', { id });
  };

  return (
    <Pressable onPress={goToPinPage} style={styles.pin}>
      <View>
        <RemoteImage fileId={image} />

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
