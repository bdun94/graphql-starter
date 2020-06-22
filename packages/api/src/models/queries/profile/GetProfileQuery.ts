export class GetProfileQuery {

	id?: number;
	
	userId: number = -1;

	constructor(init?: Partial<GetProfileQuery>) {
		Object.assign(this, init);
	}
}