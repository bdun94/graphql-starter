require('dotenv').config();
import { PrismaClient } from "@prisma/client"
const db = new PrismaClient()

import { ApolloServer, ServerInfo, AuthenticationError } from 'apollo-server';
import { typeDefs } from 'common/dist';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

const resolvers = {
  Query: {
    hello: async () => {
			return 'Hello World';
		},
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ 
  typeDefs, 
  resolvers, 
  context: ({req : { headers }}) => ({
    headers,
    db
	}),
});

// The `listen` method launches a web server.
server.listen().then(({ url }: ServerInfo) => {
  console.log(`🚀  Server ready at ${url}`);
});