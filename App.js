import { StatusBar } from 'expo-status-bar';
import React, { useState, useMemo, useEffect } from 'react';
import { Appearance } from 'react-native';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

import mainContext from './context/mainContext';

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

import Firebase from './Firebase';

i18n.locale = Localization.locale;
i18n.fallbacks = true;

//console.log(i18n.locale);

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...DefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...DefaultTheme.colors,
    primary: '#718E57',
  },
};
const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...DarkTheme,
  dark: true,
  colors: { ...PaperDarkTheme.colors, ...DarkTheme.colors, primary: '#718E57' },
};

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import loc from './utils/localization';
const AppStack = createStackNavigator();
if (Appearance.getColorScheme() === 'dark') {
  status = true;
} else {
  status = false;
}

const App = ({ navigation }) => {
  //console.log(Firebase);
  const [isDarkTheme, setIsDarkTheme] = useState(status);
  const [userLogged, setUserLogged] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme;
  //const theme = CombinedDefaultTheme;
  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {
      setUserLogged(user ? true : false);
      setUserProfile(user);
    });
  }, []);

  const mainC = useMemo(
    () => ({
      userProfile: { userProfile },
      inHome: () => setIsDarkTheme((isDark) => !isDark),
      signOutUser: () => Firebase.auth().signOut(),
      handleLogin: (email, password) => {
        Firebase.auth()
          .signInWithEmailAndPassword(email, password)
          .catch((error) => console.log(error));
      },
    }),
    []
  );
  return (
    <mainContext.Provider value={mainC}>
      <PaperProvider theme={theme}>
        {isDarkTheme ? <StatusBar style="light" /> : <StatusBar style="dark" />}
        <NavigationContainer theme={theme}>
          <AppStack.Navigator initialRouteName="Login">
            {userLogged == false ? (
              <>
                <AppStack.Screen name="Login" component={LoginScreen} />

                <AppStack.Screen
                  name="Signup"
                  options={{ title: loc.t('signup') }}
                >
                  {() => <SignUpScreen />}
                </AppStack.Screen>
              </>
            ) : (
              <>
                <AppStack.Screen name="Home">
                  {() => <HomeScreen userprofile={userProfile} />}
                </AppStack.Screen>
              </>
            )}
          </AppStack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </mainContext.Provider>
  );
};

export default App;
