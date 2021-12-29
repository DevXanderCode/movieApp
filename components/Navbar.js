import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'props-types';

const propTypes = {};

class Navbar extends React.PureComponent {
  render() {
    return <Text> {'movie App'} </Text>;
  }
}

Navbar.propTypes = propTypes;

export default Navbar;
