import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Detail, Search} from '../screens/online';
import Colors from '../themes/Colors';

const Stack = createNativeStackNavigator();

class MainStack extends React.PureComponent {
  render() {
    return (
      <Stack.Navigator headerMode="screen" initialRouteName="Home">
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
            headerTintColor: Colors?.white,
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerShadowVisible: false,
            tabBarVisible: false,
            title: '',
            headerTintColor: Colors?.white,
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default MainStack;
