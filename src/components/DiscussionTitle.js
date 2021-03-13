import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const DiscussionTitle = () => {
    return (<View style={styles.container}>
        <Text style={{fontWeight:'bold'}}> Discussion Title </Text>
        <Text> This is a discussion. </Text>
        <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
            <Text>4 responses</Text>
            <Text style={{color: '#1792EB'}}>View Discussion</Text>

        </View>

    </View>)
}

const styles = StyleSheet.create({
    container: {backgroundColor:'#E5E5E5', 
    borderRadius: 10, 
    padding:15, 
    flexDirection:'column',
    justifyContent: 'space-between', }
})

export default DiscussionTitle