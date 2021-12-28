import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {};

const Detail = () => {
  return (
    <SafeAreaView style={styles?.container}>
      <Text>Details screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

Detail.propTypes = propTypes;

export default Detail;
