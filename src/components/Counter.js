//import liraries
import React, { Component } from 'react';
import { Text, ActivityIndicator, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux'

//Third create main component
class Counter extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Counter</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Counter;
