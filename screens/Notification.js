import React from 'react';
import { StyleSheet, View, SafeAreaView, ImageBackground } from 'react-native';

import { Text } from 'react-native-paper';
import Learn from '../components/Learn';

const Notification = (props) => {
  props.title = '';
  return (
    <View style={styles.container}>
      <Text>Dummy</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  htmltext: {
    fontSize: 20,
  },
});
export default Notification;
