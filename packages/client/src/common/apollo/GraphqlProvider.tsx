import ApolloClient from 'apollo-boost';
import * as React from 'react';

import { ApolloProvider } from '@apollo/react-hooks';

import { API_CONSTANTS } from '../constants/api';

interface GraphqlProviderProps {
	children: React.ReactNode
}

const client = new ApolloClient({
	uri: API_CONSTANTS.URL
});

export const GraphqlProvider = ({ children } : GraphqlProviderProps) => (
	<ApolloProvider client={client}>
		{ children }		
	</ApolloProvider>
)

export default GraphqlProvider;

