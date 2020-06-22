import gql from 'graphql-tag';


export default gql`
	type Mutation {

		signup(email: String!, password: String!): User

	}
`