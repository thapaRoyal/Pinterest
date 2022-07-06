import { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from 'react-native';

import Pin from '../components/Pin';

interface IMasonryList {
  pins: {
    id: string;
    image: string;
    title: string;
  }[];
}

const MasonryList = ({ pins }: IMasonryList) => {
  const width = useWindowDimensions().width;

  const numColumns = Math.ceil(width / 300);

  return (
    <ScrollView>
      <View style={styles.container}>
        {Array.from(Array(numColumns)).map((_, colIndex) => (
          <View style={styles.column} key={`column_${colIndex}`}>
            {pins
              .filter((_, index) => index % numColumns === colIndex)
              .map((pin) => (
                <Pin pin={pin} key={pin.id} />
              ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
  },
});

export default MasonryList;
