import gql from 'graphql-tag';

export default gql`
	type Post {
		authorId: Int!
		content: String
		createdAt: String!
		id: Int!
		published: Boolean!
		title: String!
		author: User
	}
`