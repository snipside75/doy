import {Component, OnInit} from '@angular/core';
import {Challenge} from "../challenge";
import {ChallengeService} from "../challenge.service";

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html'
})
export class ChallengeListComponent implements OnInit {

  //make array of items
  challenges: Challenge[] = [];
  constructor(private challengeService: ChallengeService) { }

  ngOnInit() {
    this.challenges = this.challengeService.getChallenges();
    this.challengeService.challengesChanged.subscribe(
        (challenges: Challenge[]) => this.challenges = challenges
    );
  }

}
