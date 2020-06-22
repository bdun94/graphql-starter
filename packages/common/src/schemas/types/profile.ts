import gql from 'graphql-tag';

export default gql`
	type Profile {
		id: Int!
		bio: String
		userId: Int
		user: User
	}
`