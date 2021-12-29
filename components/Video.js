import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from 'react-native-video-controls';

const propTypes = {
  toggleVideo: PropTypes?.func?.isRequired,
  navigation: PropTypes?.object?.isRequired,
};

const Video = ({navigation, toggleVideo}) => {
  return (
    <VideoPlayer
      source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
      navigator={navigation}
      onBack={() => toggleVideo()}
      onEnd={() => toggleVideo()}
      tapAnywhereToPause={true}
    />
  );
};

Video.propTypes = propTypes;

export default Video;
