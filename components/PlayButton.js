import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {};

class PlayButton extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Text>Play Button</Text>
      </React.Fragment>
    );
  }
}

PlayButton.propTypes = propTypes;

export default PlayButton;
