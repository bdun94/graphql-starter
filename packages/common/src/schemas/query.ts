import gql from 'graphql-tag';

export default gql`
  type Query {

    hello: String

		posts(authorId: Int!, page: Int = 1, pageSize: Int = 50) : [ Post! ]!

		user(id: Int!) : User!

		profile(userId: Int!) : Profile!

  }
`