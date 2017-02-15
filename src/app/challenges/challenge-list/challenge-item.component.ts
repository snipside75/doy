import {Component, Input} from '@angular/core';
import {Challenge} from "../challenge";

@Component({
  selector: 'app-challenge-item',
  templateUrl: './challenge-item.component.html'
})
export class ChallengeItemComponent  {
  //asks for ch outside of component
  @Input() challenge: Challenge;
  @Input() challengeId: number;

}
