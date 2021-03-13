import React, {useState} from 'react';
import {WebView} from 'react-native-webview';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

const VideoPlayer = ({videoID}) => {
  return (
    <View
      style={{
        width: '100%',
        height: 200,
      }}>
      <WebView source={{uri: `https://www.youtube.com/embed/${videoID}`}} />
    </View>
  );
};

export default VideoPlayer;
