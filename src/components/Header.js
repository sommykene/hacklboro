import React, { useState } from 'react'
import { Image, Picker, StyleSheet, Text, View } from 'react-native'

const Header = () => {
    const [selectedValue, setSelectedValue] = useState("Guest");
    return (
        <View style={styles.container}>
            <View style={{justifyContent: 'flex-start'}}>
                <Text> Name </Text>
            </View>

            <View style={styles.drop_down}>
            <Picker
                selectedValue={selectedValue}
                style={{ height: 25, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Guest" value="guest" />
                <Picker.Item label="Student" value="student" />
                <Picker.Item label="Teacher" value="teacher" />
            </Picker>
            </View>
        </View>
    );
    }


    const styles = StyleSheet.create({
        drop_down: {
          alignItems: "flex-end"
        },

        container: {
            flexDirection:'row', 
            justifyContent: 'space-between',
            backgroundColor: '#C4C4C4',
            borderRadius: 10, 
            padding:10,

        }
        
    })

export default Header