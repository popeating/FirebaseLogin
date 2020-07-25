import React from 'react';
import { StyleSheet, View, SafeAreaView, ImageBackground } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HTML from 'react-native-render-html';
import { Text } from 'react-native-paper';
import Learn from '../components/Learn';

const Home = (props) => {
  props.title = '';
  return (
    <ImageBackground
      source={{
        uri:
          'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb',
      }}
      style={{ flex: 1, width: null, height: null }}
    >
      <View style={styles.container}>
        <HTML html="<b>hello</b> world" baseFontStyle={styles.htmltext} />
        <Learn {...props} title="Click me" />
      </View>
    </ImageBackground>
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
export default Home;
