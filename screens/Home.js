import React, { useContext } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import HTML from 'react-native-render-html';
import Learn from '../components/Learn';
import mainContext from '../context/mainContext';
import { Button } from 'react-native-paper';
import loc from '../utils/localization';

const Home = (props) => {
  const { superalert } = useContext(mainContext);
  props.title = 'z';
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
        <Learn title={loc.t('clickme')} />
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
