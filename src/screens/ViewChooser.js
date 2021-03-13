import React from 'react'
import { StyleSheet, View, Text, Button, Alert } from 'react-native'

const ViewChooser = () => {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 250}}>

            <View style={styles.container}>
            <Button
                title="Guest"
                color='#C4C4C4'
                onPress={() => Alert.alert('Guest Button pressed')}
              />
            </View>

            <View style={styles.container}>
            <Button
                title="Student"
                color='#C4C4C4'
                onPress={() => Alert.alert('Student Button pressed')}
              />
            </View>

            <View style={styles.container}>
            <Button
               title="Teacher"
               color='#C4C4C4'
               onPress={() => Alert.alert('Teacher Button pressed')}
             />
            </View>

        </View>
    )
}


const styles = StyleSheet.create({

    container: {
    borderRadius:20,
    padding:20,
    width:'70%',
    height: '40%',
    alignContent: 'center',
    fontSize: 40,
    fontWeight: 'bold',
 },
})

export default ViewChooser;
