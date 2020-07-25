import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from '../screens/Home';
import Notification from '../screens/Notification';

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
        name="Home"
        options={{
          tabBarIcon: 'home-account',
        }}
      >
        {() => <Home inHome={props.inHome} />}
      </Tab.Screen>

      <Tab.Screen
        name="Notifications"
        component={Notification}
        options={{
          tabBarIcon: 'bell-outline',
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
