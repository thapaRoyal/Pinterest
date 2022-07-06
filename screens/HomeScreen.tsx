import { useNhostClient } from '@nhost/react';
import { useEffect } from 'react';
import pins from '../assets/data/pins';
import MasonryList from '../components/MasonryList';

export default function HomeScreen() {
  const nhost = useNhostClient();
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
    console.log(response);
  };

  useEffect(() => {
    fetchPins();
  }, []);

  return <MasonryList pins={pins} />;
}
