export class CreateProfileAction {

	userId: number = -1;

	bio: string = '';

	constructor(init?: Partial<CreateProfileAction>) {
		Object.assign(this, init);
	}

}