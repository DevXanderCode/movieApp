import React, {useState, useEffect} from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import CameraRoll from '@react-native-community/cameraroll';

const propTypes = {
  navigation: PropTypes?.object?.isRequired,
};

const Explorer = ({navigation}) => {
  const hasAndroidPermission = async () => {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  };

  const getVideos = async () => {
    // if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
    //   return;
    // }

    CameraRoll.getPhotos({
      first: 20,
      assetType: 'Videos',
    })
      .then(r => {
        console.log('Logging videos data', r);
      })
      .catch(err => {
        //Error Loading Images
        console.log('Logging error ==> ', err);
      });
    CameraRoll.getAlbums({
      first: 20,
      assetType: 'Videos',
    })
      .then(r => {
        console.log('Logging videos data', r);
      })
      .catch(err => {
        //Error Loading Images
        console.log('Logging error ==> ', err);
      });
  };

  useEffect(() => {
    getVideos();
  }, []);

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
