import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    localStorage.removeItem("user");
    this.loginService.logged = false;
    this.router.navigate(['/user/login']);
  }

}
