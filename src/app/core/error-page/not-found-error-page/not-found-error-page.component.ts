import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found-error-page',
  templateUrl: './not-found-error-page.component.html',
  styleUrls: ['./not-found-error-page.component.scss']
})
export class NotFoundErrorPageComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['plant-comet/dashboard']);
  }

}
