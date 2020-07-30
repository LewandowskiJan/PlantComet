import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {};

  constructor(public authService: AuthService, public router: Router) {

  }
  ngOnInit() {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/plant-comet/dashboard']);
    }

    this.authService.passwordOrEmailWrongError = false;
   }

   onSubmit() {
    this.authService.login(this.model.email, this.model.password);
  }
}
