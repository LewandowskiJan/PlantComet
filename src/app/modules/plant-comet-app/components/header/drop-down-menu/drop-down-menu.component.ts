import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { ViewsService } from '../../../services/views.service';


@Component({
  selector: 'app-drop-down-menu',
  templateUrl: './drop-down-menu.component.html',
  styleUrls: ['./drop-down-menu.component.scss']
})
export class DropDownMenuComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private viewsService: ViewsService
  ) { }

  ngOnInit() {
  }

  toggleDropDownMenu() {
    this.viewsService.isDropDownMenuVisible.next(false);
  }

}
