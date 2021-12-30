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
      <SafeAreaView style={styles?.container}>
        <View style={styles?.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-back" size={40} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

Navbar.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
});

export default Navbar;
