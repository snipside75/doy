import { Component } from '@angular/core';
import {ChallengeService} from "./challenges/challenge.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent  {

  constructor(private challengeService: ChallengeService) { }

  onStore() {
    this.challengeService.storeData().subscribe(
        data => console.log(data),
        error => console.error(error)
    )
  }
  onFetch() {
    this.challengeService.fetchData();
  }
}
