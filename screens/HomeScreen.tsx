import { useNhostClient } from '@nhost/react';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import MasonryList from '../components/MasonryList';

export default function HomeScreen() {
  const nhost = useNhostClient();

  const [pins, setPins] = useState([]);

  const fetchPins = async () => {
    const response = await nhost.graphql.request(
      `
      query MyQuery {
        pins {
          user_id
          title
          image
          id
          created_at
        }
      }
      `
    );
    if (response.error) {
      Alert.alert('Error fetching pins');
    } else {
      setPins(response.data.pins);
    }
    console.log(response);
  };

  useEffect(() => {
    fetchPins();
  }, []);

  return <MasonryList pins={pins} />;
}
