import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Title, Paragraph } from 'react-native-paper';
import mainContext from '../context/mainContext';
import Firebase from '../Firebase';
import loc from '../utils/localization';
const HomeScreen = () => {
  const { currentUser } = Firebase.auth();
  //console.log(currentUser);
  //const signOutUser = () => Firebase.auth().signOut();
  //const { userProfile } = useContext(mainContext);
  const { signOutUser } = useContext(mainContext);
  const { inHome } = useContext(mainContext);

  // console.log(mainContext);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Title>Home Screen</Title>
      </View>
      <View style={styles.box}>
        <Paragraph>{currentUser.email}</Paragraph>
      </View>
      <View style={styles.box}>
        <Button onPress={() => signOutUser()} mode="contained" icon="logout">
          {loc.t('signout')}
        </Button>
      </View>
      <View style={styles.box}>
        <Button onPress={() => inHome()} icon="camera" mode="contained">
          {loc.t('theme')}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    marginBottom: 20,
  },
});

export default HomeScreen;
