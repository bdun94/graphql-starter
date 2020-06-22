import { GraphlResolver } from 'types/Resolver';
import { createUser } from 'src/services/UserService';

interface SignupArgs {
	email: string;
	password: string;
}

export const signup: GraphlResolver<any, SignupArgs> = (parent, args, context, info) => {
	const {db} = context;
	const {email, password} = args;

	return createUser(db)({ email, password })
}


export default signup;
