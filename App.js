import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

const App = () => {
  const logger = 'test the console logging';
  console.log(logger);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello World!</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
