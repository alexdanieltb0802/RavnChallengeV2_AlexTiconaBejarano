/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View,
    RefreshControl
} from 'react-native';



export default class App extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Empty page</Text>
            </View>
        );

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


