import { StatusBar } from 'expo-status-bar';
import React, { useState, useMemo, useEffect } from 'react';
import { Appearance, View } from 'react-native';
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
  ActivityIndicator,
} from 'react-native-paper';

import mainContext from './context/mainContext';

import Firebase from './Firebase';

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
import { disableExpoCliLogging } from 'expo/build/logs/Logs';
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
  const [isLoading, setIsLoading] = useState(true);

  const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme;

  useEffect(() => {
    const authListener = Firebase.auth().onAuthStateChanged((user) => {
      setUserLogged(user ? true : false);
      setIsLoading(false);
      setUserProfile(user);
    });
    return authListener;
  }, []);

  const doLogin = async (email, password) => {
    setIsLoading(true);
    //console.log('login' + JSON.stringify(userProfile));
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => console.log(error));
    //setIsLoading(false);
  };

  const mainC = useMemo(
    () => ({
      userProfile: { userProfile },
      inHome: () => setIsDarkTheme((isDark) => !isDark),
      signOutUser: () => Firebase.auth().signOut(),
      handleLogin: (email, password) => {
        doLogin(email, password);
      },
    }),
    []
  );

  if (isLoading) {
    // Checking if already logged in
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator animating={true} size="large" />
      </View>
    );
  }

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
                <AppStack.Screen
                  name="Home"
                  component={HomeScreen}
                  options={{ headerShown: false }}
                />
              </>
            )}
          </AppStack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </mainContext.Provider>
  );
};

export default App;
