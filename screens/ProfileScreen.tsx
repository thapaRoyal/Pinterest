import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MasonryList from '../components/MasonryList';
import pins from '../assets/data/pins';
import { Entypo, Feather } from '@expo/vector-icons';
import { useNhostClient, useSignOut } from '@nhost/react';

export default function ProfileScreen() {
  const nhost = useNhostClient();

  const { signOut } = useSignOut();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.icons}>
          <Pressable onPress={signOut}>
            <Feather name="share" size={24} color="black" style={styles.icon} />
          </Pressable>
          <Entypo
            name="dots-three-horizontal"
            size={24}
            color="black"
            style={styles.icon}
          />
        </View>
        <Image
          source={require('../assets/images/avatar.jpg')}
          style={styles.image}
        />
        <Text style={styles.title}>thapaRoyal</Text>
        <Text style={styles.subtitle}>777k followers | 23 Followings</Text>
      </View>
      <MasonryList pins={pins} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  subtitle: {
    color: '#181818',
    fontWeight: '600',
    margin: 10,
  },
  image: {
    height: 200,
    aspectRatio: 1,
    borderRadius: 200,
    marginVertical: 10,
  },
  header: {
    alignItems: 'center',
  },
  icons: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    padding: 10,
  },
  icon: {
    paddingHorizontal: 10,
  },
});
