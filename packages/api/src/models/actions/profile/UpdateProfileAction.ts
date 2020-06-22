import { CreateProfileAction } from "./CreateProfileAction";

export class UpdateProfileAction extends CreateProfileAction {

	id: number = -1;

	constructor(init?: Partial<UpdateProfileAction>) {
		super(init);
	}

}