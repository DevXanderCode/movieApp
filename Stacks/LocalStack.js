import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Detail, Search} from '../screens';
import Colors from '../themes/Colors';
import {Explorer} from '../screens/local';

const Stack = createNativeStackNavigator();

class LocalStack extends React.PureComponent {
  render() {
    return (
      <Stack.Navigator headerMode="screen">
        <Stack.Screen
          name="Explorer"
          component={Explorer}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerShadowVisible: false,
            title: '',
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default LocalStack;
