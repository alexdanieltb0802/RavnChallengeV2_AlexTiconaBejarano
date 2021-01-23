import React, { Component } from 'react';
import { ActivityIndicator, FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ListItem, Header } from 'react-native-elements';

import { useQuery, gql } from '@apollo/client';

const ALL_PEOPLE = gql`
    {
 	 allPeople{
  	    people{
          name
          homeworld{
            name
          }
          species{
            name
          }
        }
	 }
    }

`;
function PeopleQuery() {
    const { loading, error, data } = useQuery(ALL_PEOPLE);

    if (loading) {
        return (
            <View style={[styles.LoadingHorizontal]}>
                <ActivityIndicator />
                <Text> Loading </Text>
            </View>
        );
    }
    if (error) {
        return (
            <View style={[styles.LoadingHorizontal]}>
                <Text style={[styles.errorText]}> Failed to Load Data </Text>
            </View>
        );
    }

    return (
        <FlatList
            data={data.allPeople.people}
            renderItem={({ item }) => (
                <ListItem bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title style={[styles.boldText]}>
                            {item.name}
                        </ListItem.Title>

                        <ListItem.Subtitle>Human from {item.homeworld.name}</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
            )}
            keyExtractor={item => item.name}
        />


    );


}

export default PeopleQuery;

const styles = StyleSheet.create({
    LoadingHorizontal: {
        flexDirection: "row",
        justifyContent: "center",
        padding: 10
    },
    errorText: {
        color: 'red',
        fontWeight: 'bold'
    },
    boldText: {
        fontWeight: 'bold'
    }
});