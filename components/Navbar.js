import React from 'react';
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

const propTypes = {
  navigation: PropTypes?.object?.isRequired,
};

class Navbar extends React.PureComponent {
  render() {
    const {navigation} = this?.props;
    return (
      //   <SafeAreaView style={styles?.container}>
      //   <View style={styles?.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="chevron-back" size={40} color={'red'} />
      </TouchableOpacity>
      //   </View>
      //   </SafeAreaView>
    );
  }
}

Navbar.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    position: 'absolute',
    height: 50,
    top: 0,
    left: 0,
    right: 0,
    borderBottomWidth: 0,
    opacity: 0.5,
  },
});

export default Navbar;
