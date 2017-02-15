import {Routes} from "@angular/router";
import {ChallengeStartComponent} from "./challenge-start.component";
import {ChallengeDetailComponent} from "./challenge-detail/challenge-detail.component";
import {ChallengeEditComponent} from "./challenge-edit/challenge-edit.component";
export const CHALLENGE_ROUTES: Routes = [
    {path: '', component: ChallengeStartComponent},
    {path: 'new', component: ChallengeEditComponent},
    {path: ':id', component: ChallengeDetailComponent},
    {path: ':id/edit', component: ChallengeEditComponent},
];
