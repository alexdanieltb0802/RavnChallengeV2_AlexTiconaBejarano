import React, { Component } from 'react';
import { ActivityIndicato, FlatList, StyleSheet, Text, View } from 'react-native';

import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';

import PeopleQuery from './peopleQuery.js';

//Initialize Apollo Client
const client = new ApolloClient({
    link: new HttpLink({
        uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    }),
    cache: new InMemoryCache()
});

export default class App extends Component {

    //constructor(props) {
    //    super(props);

    //    this.state = {
    //        loading: false,
    //        error: false,
    //        listPeople: [],
    //    }
    //}

    //componentDidMount() {


    //}

    //getPeople = () => {

    //    const { loading, error, data } = useQuery(ALL_PEOPLE);

    //    if (loading) {
    //        this.setState({ loading: true });
    //    }
    //    if (error) {
    //        this.setState({ error: true });
    //    }

    //    this.setState({
    //        listPeople: data.allPeople.people,
    //        loading: false,
    //        error: false
    //    });

    //};

    //loadMore = () => {

    //    this.setState({
    //        seed: this.state.seed + 1,
    //        page: this.state.page + 1,
    //        refreshing: true,
    //    }, () => {
    //        this.getUserRandom();

    //    });
    //};

    render() {
        return (
            <ApolloProvider client={client}>
                <View>
                    <PeopleQuery />
                </View>
                
            </ApolloProvider>
        );
    }
}
