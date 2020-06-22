export class CreateUserAction {

	email: string = '';

	password: string = '';

	constructor(init?: Partial<CreateUserAction>) {
		Object.assign(this, init);
	}
}

export default CreateUserAction;


