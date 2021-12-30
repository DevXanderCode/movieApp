import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './Stacks';

const App = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default App;
