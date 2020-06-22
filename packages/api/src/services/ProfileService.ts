import { PrismaClient } from "@prisma/client";
import { CreateProfileAction } from "models/actions/profile/CreateProfileAction";
import { UpdateProfileAction } from "models/actions/profile/UpdateProfileAction";
import { GetProfileQuery } from "models/queries/profile/GetProfileQuery";

export const createProfile = (db: PrismaClient) => ({ bio, userId: id }: CreateProfileAction) =>  db.profile.create({
		data: {
			bio,
			user: {
				connect: {
					id
				}
			}
		}
	});

export const updateProfile = (db: PrismaClient) => ({ id, bio }: UpdateProfileAction) => db.profile.update({
	where: { id	},
	data: {	bio }
});

export const getProfile = (db: PrismaClient) => ({id, userId}: GetProfileQuery) => db.profile.findOne({
	where: {
		id,
		userId			
	}
})