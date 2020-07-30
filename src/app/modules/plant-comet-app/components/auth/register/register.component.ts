import { AuthService } from '../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  model: any = {};

  constructor(public authService: AuthService, public router: Router) {

  }
  ngOnInit() {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/plant-comet/dashboard']);
    }
    this.authService.emailExistsError = false;
  }

  onSubmit() {
    this.authService.register(this.model.email, this.model.password);
  }

}
