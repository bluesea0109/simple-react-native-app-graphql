import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { Text, View } from 'react-native';
import { createApolloClient } from './common/config/apollo-client';

const apolloClient = createApolloClient();

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <View>
        <Text>Hello</Text>
      </View>
    </ApolloProvider>
  );
};

export default App;
