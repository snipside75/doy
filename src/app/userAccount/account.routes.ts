/**
 * Created by amirhossein on 2/10/2017.
 */

import {Routes} from "@angular/router";
import { FrontComponent } from './front/front.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import {UserComponent} from "./user.component";

export const ACCOUNT_ROUTES: Routes = [
  {path: '', component: FrontComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'register', component: RegisterComponent}
];
