import {Component, OnInit, OnDestroy} from '@angular/core';
import {Challenge} from "../challenge";
import {AddingListService} from "../../adding-list/adding-list.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {ChallengeService} from "../challenge.service";

@Component({
  selector: 'app-challenge-detail',
  templateUrl: './challenge-detail.component.html'
})
export class ChallengeDetailComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private challengeIndex: number;
  selectedChallenge: Challenge;

  constructor(private als: AddingListService,
              private route: ActivatedRoute,
              private challengesService: ChallengeService,
              private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
        (params:any) => {
          this.challengeIndex = params['id'];
          this.selectedChallenge = this.challengesService.getChallenge(this.challengeIndex);
        }
    )
  }

  onAddToAddingList() {
    this.als.addItems(this.selectedChallenge.ingredients);
  }

  onEdit() {
    this.router.navigate(['/challenges', this.challengeIndex, 'edit'])
  }

  onDelete() {
    this.challengesService.deleteChallenge(this.selectedChallenge);
    this.router.navigate(['/challenges']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
