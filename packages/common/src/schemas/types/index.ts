import gql from 'graphql-tag';

import post from './post';
import profile from './profile';
import user from './user';

export default gql`
	${user}
	${post}
	${profile}
`