import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ViewsService } from '../../services/views.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isDropdownMenuVisible = false;

  constructor(
    public auth: AuthService,
    public viewsService: ViewsService,
  ) { }

  ngOnInit() {
    this.toggleDropDownMenu();
    this.viewsService.isDropDownMenuVisible.subscribe(bool => {
      this.isDropdownMenuVisible = bool;
    });
  }

  toggleDropDownMenu() {
    this.viewsService.isDropDownMenuVisible.next(!this.isDropdownMenuVisible);
  }
}
