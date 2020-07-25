import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
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

  const inHome = () => {
    setIsDarkTheme((isDark) => !isDark);
  };
  return (
    <PaperProvider theme={theme}>
      {isDarkTheme ? <StatusBar style="light" /> : <StatusBar style="dark" />}
      <NavigationContainer theme={theme}>
        <AppDrawer.Navigator initialRouteName="Home">
          <AppDrawer.Screen name="Home">
            {() => <Tabs inHome={inHome} />}
          </AppDrawer.Screen>
          <AppDrawer.Screen
            name="Notifications"
            component={Notification}
          ></AppDrawer.Screen>
        </AppDrawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
