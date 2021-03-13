import React, {useState} from 'react';
import {WebView} from 'react-native-webview';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

const VideoPlayer = ({route}) => {
  const [videoID, setVideoID] = useState('');
  React.useEffect(() => {
    if (route.params?.videoId) {
      setVideoID(route.params?.videoId);
    }
  }, [route.params?.videoId]);
  return (
    <View
      style={{
        flex: 1,
        // marginTop: Constant,
        // statusBarHeight,
      }}>
      <View
        style={{
          width: '100%',
          height: 200,
        }}>
        <WebView source={{uri: `https://www.youtube.com/embed/${videoID}`}} />
      </View>
      <Text
        style={{
          fontSize: 20,
          //   width: Dimensions.get('screen').width - 50,
          margin: 9,
        }}
        numberOfLines={2}
        ellipsizeMode="tail">
        Lesson 1
      </Text>
      <View style={{borderBottomwidth: 1}} />
    </View>
  );
};

export default VideoPlayer;
