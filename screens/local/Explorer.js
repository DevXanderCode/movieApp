import React from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  navigation: PropTypes?.object?.isRequired,
};

const Explorer = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello from the Explorer Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

Explorer.propTypes = propTypes;

export default Explorer;
