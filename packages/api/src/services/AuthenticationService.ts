import { hash, compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '@prisma/client';
import { GraphQLResolveInfo } from "graphql";

import { ApolloContext } from 'src/types/ApolloContext';
import { GraphlResolver } from 'types/Resolver';
import { AuthenticationError } from 'apollo-server';


const APP_SECRET = process.env.APP_HASH_SECRET || '';
const SALT_CONSTANT = parseInt(process.env.APP_SALT_CONSTANT || '', 10);
const EXPIRE_TIME = process.env.APP_AUTH_EXPIRE_TIME;
const invalidAuthentication = 'Invalid username or password';
const invalidToken = 'Invalid token provided';
export const generatePassword = (password: string) => hash(password, SALT_CONSTANT);

/**
 * Creates an authentication token  
 * @param param0 
 */
export const authenticate = ({db}: ApolloContext) => async (email: string, password: string) => {
	const user = await db.user.findOne({
		where: {
			email
		}
	});

	if(!user) {
		throw new AuthenticationError(invalidAuthentication);
	}
	
	const validPassword = await compare(password, user.password || '');

	if(!validPassword) {
		throw new AuthenticationError(invalidAuthentication);
	}

	return createToken(user, EXPIRE_TIME);
}

const createToken = (user: User, expiresIn = '10d') => {
	const { id, password, ...info } = user;
	const payload = {
		...info
	}

	return jwt.sign(payload, APP_SECRET, {
		expiresIn
	});
}

/**
 * Getting token based off
 * @param context ApolloContext
 */
const getTokenFromHeader = (authorization: string) => authorization.replace('Bearer ', ''); 

const getTokenFromContext = (context: ApolloContext) => {
	const authHeader = context.headers.authorization;

	// Enforcing Bearer token authentication
	if(!authHeader || !authHeader.includes('Bearer')) {
		throw new AuthenticationError(invalidToken);
	}

	return getTokenFromHeader(authHeader);
}

const verifyToken = (token: string) => new Promise((res, rej) => {
	jwt.verify(token, APP_SECRET, (err, decoded) => {
		if(err) {
			rej(new AuthenticationError(invalidToken));
		} else {
			res(decoded);
		}
	});
})


export function authenticatedResolver<P = any, A = { [argName: string] : any }>(resolver: GraphlResolver<P, A>): GraphlResolver<P, A>  {

	return async (parent: P, args: A, context: ApolloContext, info: GraphQLResolveInfo) => {
		
		const token = getTokenFromContext(context);

		const payload = await verifyToken(token);
		
		// context.userId = userId;
		
		return resolver(parent, args, context, info);
	}	
}
 