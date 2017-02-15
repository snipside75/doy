import {Injectable, EventEmitter} from '@angular/core';
import {Challenge} from "./challenge";
import {Ingredient} from "../shared/ingredient";
import {Headers, Http, Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class ChallengeService {
  challengesChanged = new EventEmitter<Challenge[]>();
  //make array of items
  private challenges: Challenge[] = [
    new Challenge('Ice Bucket', 'Dont get pneumania', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Doing_the_ALS_Ice_Bucket_Challenge_(14927191426).jpg/220px-Doing_the_ALS_Ice_Bucket_Challenge_(14927191426).jpg', [
        new Ingredient('Bucket', 1),
        new Ingredient('Ice', 5)
    ]),
    new Challenge('Some other', 'Some description', 'http://vignette2.wikia.nocookie.net/animaljam/images/d/d2/Challenge-accepted.png/revision/latest?cb=20140928111255', [])
  ];
  constructor(private http:Http) { }

  getChallenges() {
    return this.challenges;
  }

  getChallenge(id: number) {
    return this.challenges[id];
  }

  deleteChallenge(challenge: Challenge) {
    this.challenges.splice(this.challenges.indexOf(challenge), 1)
  }
  addChallenge(challenge: Challenge) {
    this.challenges.push(challenge);
  }
  editChallenge(oldChallenge: Challenge, newChallenge: Challenge) {
    this.challenges[this.challenges.indexOf(oldChallenge)] = newChallenge;
  }

  //backend
  storeData() {
    const body = JSON.stringify(this.challenges);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://do-you-dare-bc9e4.firebaseio.com/challenges.json', body, {headers: headers});
  }
  fetchData() {
    return this.http.get('https://do-you-dare-bc9e4.firebaseio.com/challenges.json')
        .map((response: Response) => response.json())
        .subscribe(
            (data: Challenge[])  => {
              this.challenges = data;
              this.challengesChanged.emit(this.challenges);
            }
        );
  }
}
