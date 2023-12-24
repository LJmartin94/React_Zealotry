import React from 'react';
import { View, StyleSheet } from 'react-native';

import { DayPartButton } from './DayPartButton';

export const DayMenu = () => {
  return (
    <View style={styles.container}>
      <DayPartButton title='Morning' backgroundImage={require('#Assets/img/morning_button.png')} />
      <DayPartButton title='Day' backgroundImage={require('#Assets/img/day_button.png')} />
      <DayPartButton title='Evening' backgroundImage={require('#Assets/img/evening_button.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});
