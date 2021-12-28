import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

const propTypes = {};

class PlayButton extends React.PureComponent {
  render() {
    return (
      <Pressable onPress={() => {}} style={styles?.button}>
        <Icon name="caret-forward-outline" size={30} color="white" />
      </Pressable>
    );
  }
}

PlayButton.propTypes = propTypes;

const styles = StyleSheet.create({
  button: {
    alignContent: 'center',
    borderRadius: 50,
    width: 50,
    padding: 10,
    backgroundColor: '#4481fc',
  },
});

export default PlayButton;
