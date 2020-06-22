import { PrismaClient, UserWhereInput } from "@prisma/client";
import { CreateUserAction } from 'models/actions/users/CreateUserAction';
import { generatePassword } from "./AuthenticationService";


export const createUser = (db: PrismaClient) => async (user: CreateUserAction) => {
	const { password: plainPassword, ...rest } = user;
	const password = await generatePassword(plainPassword);

	return db.user.create({
		data: {
			password,
			...rest
		}
	});
} 