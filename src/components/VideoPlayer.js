import React from 'react';
import {Component} from 'react';
import {WebView} from 'react-native-webview';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import Constant from 'expo-constants';

const VideoPlayer = (props) => {
    return(
        <View style = {{
            flex: 1,
            marginTop:Constant, statusBarHeight
        }}>
            <View style = {{
                width: "100%",
                height: 200
            }}> 
            <WebView source={{ uri: `https://youtu.be//embed/${props.vidoeId}`}}/>

            </View>
            <Text style ={{
                fontsize:20,
                width: Dimensions.get("screen").width - 50,
                margin: 9
            }}
            numberOfLines={2}
            ellipsizeMode="tail"
            > 
            {props.title}
            Lesson 1</Text>
            <View
            style = {{borderBottomwidth:1 }}/>
        </View>
    )
}