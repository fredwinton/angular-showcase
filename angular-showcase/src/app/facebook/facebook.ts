import { FacebookFriend } from './facebook-friend/facebook-friend';

export class Facebook {
	

	constructor(
		public id: number,
		public firstName: string,
		public lastName: string,
		public accountName: string,
		public status: string
	) 	{

		}
}