import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const arrow = require('../images/arrow.png');

const LessonTitle = () => {
    return (<View style={styles.container}>
        <Text style={{fontWeight:'bold'}}> 1. this is lesson 1 </Text>
        <Image source={arrow} />
    </View>)
}

const styles = StyleSheet.create({
    container: {backgroundColor:'#E5E5E5', 
    borderRadius: 10, 
    padding:15, 
    flexDirection:'row',
    justifyContent: 'space-between', }
})

export default LessonTitle