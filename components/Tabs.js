import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from '../screens/Home';
import Notification from '../screens/Notification';
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
    </Tab.Navigator>
  );
};

export default Tabs;
