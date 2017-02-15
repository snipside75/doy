import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {LoginService} from '../services/login.service';
import {ChallengesComponent} from '../../challenges/challenges.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private user: any = {};

  constructor(private loginService: LoginService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    if (localStorage.getItem("user") !== null) {
      this.loginService.setUser(JSON.parse(localStorage.getItem("user")));
      this.loginService.logged = true;
      this.router.navigate(['/challenges']);
    } else if (this.loginService.getUser().password !== undefined) {
      this.loginService.login();
    }
  }

  login = (value: any) => {
    //console.log(value);
    this.loginService.setUser(value);
    this.loginService.login();
  }

}
