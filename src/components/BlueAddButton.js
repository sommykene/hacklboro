import React from 'react'
import { Image, View, StyleSheet, Text } from 'react-native'

const BlueAddButton = () => {
    return (
        <View style={styles.container}>
            <Text style={{color: 'white',fontWeight:'bold', fontSize:40}}> + </Text>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
    backgroundColor:'#1792EB', 
    borderRadius: 10, 
    width:'15%',
    flexDirection:'row',
    justifyContent: 'center',
}
})

 export default BlueAddButton