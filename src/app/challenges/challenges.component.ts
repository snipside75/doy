import { Component, OnInit } from '@angular/core';
import {Challenge} from "./challenge";

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html'
})
export class ChallengesComponent implements OnInit {
  selectedChallenge: Challenge;
  constructor() { }

  ngOnInit() {
  }

}
