import gql from 'graphql-tag';

export default gql`

	type User {
		createdAt: String!
		email: String!
		guid: String!
		id: Int!
		password: String!
		posts(page: Int = 1, pageSize: Int = 50): [ Post! ]!
	}
`