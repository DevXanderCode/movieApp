import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Detail} from '../screens';

const Stack = createNativeStackNavigator();

class MainStack extends React.PureComponent {
  render() {
    return (
      <Stack.Navigator headerMode="screen">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerShadowVisible: false,
            title: '',
          }}
        />
        <Stack.Screen
          name="Details"
          component={Detail}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerShadowVisible: false,
            tabBarVisible: false,
            title: '',
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default MainStack;
