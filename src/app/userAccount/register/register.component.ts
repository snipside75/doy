import {Component, OnInit} from '@angular/core';
import {LoginService} from "../services/login.service";
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  private username: string = '';
  private password: string = '';
  private email: string = '';
  private password1: string = '';
  private passwordcheck: boolean = true;

  constructor(private login: LoginService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  passCheck = () => {
    const password1 = this.password1;
    const password = this.password;
    if (password1===password) {
      this.passwordcheck=true;
    } else {
      this.passwordcheck=false;
    }
    this.login.passCheck(this.passwordcheck);
  };


  register = () => {
    const user = {
      username: this.username,
      password: this.password,
      email: this.email
    };
    this.login.setUser(user);
    this.login.register();

  }
}
