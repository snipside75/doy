import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { ChallengeListComponent } from './challenges/challenge-list/challenge-list.component';
import { ChallengeItemComponent } from './challenges/challenge-list/challenge-item.component';
import { ChallengeDetailComponent } from './challenges/challenge-detail/challenge-detail.component';
import { AddingListComponent } from './adding-list/adding-list.component';
import { AddingListAddComponent } from './adding-list/adding-list-add.component';
import { DropdownDirective } from './dropdown.directive';
import {ChallengeService} from "./challenges/challenge.service";
import {AddingListService} from "./adding-list/adding-list.service";
import { routing } from "./app.routing";
import { ChallengeEditComponent } from './challenges/challenge-edit/challenge-edit.component';
import { ChallengeStartComponent } from './challenges/challenge-start.component';
import { LoginComponent } from './userAccount/login/login.component';
import { LogoutComponent } from './userAccount/logout/logout.component';
import { RegisterComponent } from './userAccount/register/register.component';
import { FrontComponent } from './userAccount/front/front.component';
import {LoginService} from "./userAccount/services/login.service";
import { UserComponent } from './userAccount/user.component';



@NgModule({
  //add directives here
  declarations: [
    AppComponent,
    HeaderComponent,
    ChallengesComponent,
    ChallengeListComponent,
    ChallengeItemComponent,
    ChallengeDetailComponent,
    AddingListComponent,
    AddingListAddComponent,
    DropdownDirective,
    ChallengeEditComponent,
    ChallengeStartComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    FrontComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [ChallengeService, AddingListService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
