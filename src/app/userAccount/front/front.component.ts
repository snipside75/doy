import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

}
