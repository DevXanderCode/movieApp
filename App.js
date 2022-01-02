import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';
import {MainStack, LocalStack} from './Stacks';

const Tab = createBottomTabNavigator();

const getIcons = (route, color) => {
  let iconName;

  if (route?.name == 'online') {
    iconName = 'home';
  } else if (route?.name == 'local') {
    iconName = 'folder-video';
  }

  return <Icon name={iconName} color={color} size={32} />;
};

const App = () => {
  return (
    <NavigationContainer>
      {/* <MainStack /> */}
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => getIcons(route, color),
        })}>
        <Tab.Screen name="online" component={MainStack} />
        <Tab.Screen name="local" component={LocalStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
