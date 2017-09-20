import { Injectable } from '@angular/core';
import { Facebook } from './facebook';
import { FacebookFriend } from './facebook-friend/facebook-friend';
import { myFriends } from './mock-friends';

@Injectable()
export class FacebookService {

  constructor() { }

  getFriends(): FacebookFriend[] {
  		return myFriends;
  }

}
