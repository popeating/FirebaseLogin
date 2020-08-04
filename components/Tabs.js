import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from '../screens/Home';
import Notification from '../screens/Notification';
import LoginScreen from '../screens/LoginScreen';
import loc from '../utils/localization';

const Tab = createMaterialBottomTabNavigator();
console.log(Tab);
const Tabs = (props) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      shifting={true}
      sceneAnimationEnabled={false}
    >
      <Tab.Screen
        name={loc.t('home')}
        options={{
          tabBarIcon: 'home-account',
        }}
      >
        {() => <Home />}
      </Tab.Screen>

      <Tab.Screen
        name={loc.t('notifiche')}
        component={Notification}
        options={{
          tabBarIcon: 'bell-outline',
        }}
      />
      <Tab.Screen
        name={loc.t('entra')}
        component={LoginScreen}
        options={{
          tabBarIcon: 'login',
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
