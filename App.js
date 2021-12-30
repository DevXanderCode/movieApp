import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Detail} from './screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerShadowVisible: false,
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
    </NavigationContainer>
  );
};

export default App;
