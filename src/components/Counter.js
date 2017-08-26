//import liraries
import React, { Component } from 'react';
import { Text, Button, ActivityIndicator, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import * as action from '../action'

//Third create main component
class Counter extends Component {
    render() {
        //Seven create detail and call action (this.props.object)
        const {beforeSelect} = this.props
        return (    
            <View style={styles.container}>
                <Text>{beforeSelect}</Text>
                <Button onPress = {() => this.props.select('SUM') } title="+"/>
                <Button onPress = {() => this.props.select('MINUS') } title="-"/>
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

//Five create mapStateToProps
const mapStateToProps = state => {
    return {
        beforeSelect: state.beforeSelect
    }
}
//Six create connect mapStateToProps
export default connect(mapStateToProps, action)(Counter);
