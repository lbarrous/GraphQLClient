import React from 'react';
import {ApolloClient, InMemoryCache} from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';

const client = new ApolloClient({
  uri: process.env.REACT_APP_API,
  cache: new InMemoryCache()
});

const App = () => (
  <ApolloProvider client={client}>
    <div><h2>My Muscle App</h2></div>
  </ApolloProvider>
);

export default App;
