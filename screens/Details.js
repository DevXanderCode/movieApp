import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {};

const Detail = ({route, navigation}) => {
  const {movieDetail} = route?.params;
  return (
    <SafeAreaView style={styles?.container}>
      <Text>{movieDetail?.title || movieDetail?.original_name}</Text>
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
