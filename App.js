import { StatusBar } from 'expo-status-bar';
import React, { useState, useMemo } from 'react';
import { Appearance } from 'react-native';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

import mainContext from './context/mainContext';

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
i18n.locale = Localization.locale;
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

console.log(i18n.locale);

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...DefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...DefaultTheme.colors,
    primary: '#718E57',
  },
};
const CombinedDarkTheme = { ...PaperDarkTheme, ...DarkTheme };
import Notification from './screens/Notification';
import Tabs from './components/Tabs';
const AppDrawer = createDrawerNavigator();
if (Appearance.getColorScheme() === 'dark') {
  console.log('dark');
  status = true;
} else {
  status = false;
}
const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(status);

  const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme;

  const mainC = useMemo(
    () => ({
      inHome: () => setIsDarkTheme((isDark) => !isDark),
    }),
    []
  );

  return (
    <mainContext.Provider value={mainC}>
      <PaperProvider theme={theme}>
        {isDarkTheme ? <StatusBar style="light" /> : <StatusBar style="dark" />}
        <NavigationContainer theme={theme}>
          <AppDrawer.Navigator initialRouteName="Home">
            <AppDrawer.Screen name="Home">{() => <Tabs />}</AppDrawer.Screen>
            <AppDrawer.Screen
              name="Notifications"
              component={Notification}
            ></AppDrawer.Screen>
          </AppDrawer.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </mainContext.Provider>
  );
};

export default App;
