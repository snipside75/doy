import {Routes, RouterModule} from "@angular/router";
import {ChallengesComponent} from "./challenges/challenges.component";
import {AddingListComponent} from "./adding-list/adding-list.component";
import {CHALLENGE_ROUTES} from "./challenges/challenges.routes";
import {FrontComponent} from "./userAccount/front/front.component";
import {ACCOUNT_ROUTES} from "./userAccount/account.routes";
import {UserComponent} from "./userAccount/user.component";


const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/user', pathMatch: 'full'},
  {path: 'challenges', component: ChallengesComponent, children: CHALLENGE_ROUTES},
  {path: 'user', component: FrontComponent, children: ACCOUNT_ROUTES},

  {path: 'adding-list', component: AddingListComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
