import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewsService {

  public addTransferForm: Subject<boolean> = new Subject<boolean>();
  public showPaymentHistory: Subject<boolean> = new Subject<boolean>();
  public statusMsg: Subject<boolean> = new Subject<boolean>();
  public showStatusMsg: Subject<boolean> = new Subject<boolean>();
  public smsValidationForm: Subject<boolean> = new Subject<boolean>();
  public showAllUserAccounts: Subject<boolean> = new Subject<boolean>();
  public isSuccess: boolean;
  public isDropDownMenuVisible: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  toggleStatusMsg() {
    this.showStatusMsg.subscribe(bool => {
      this.showStatusMsg.next(!bool);
    });
  }

  toggleDropDownMenu() {
    this.isDropDownMenuVisible.subscribe(bool => {
      this.isDropDownMenuVisible.next(!bool);
    });
  }

  checkIsSuccess() {
    this.statusMsg.subscribe(bool => {
      this.isSuccess = bool;
      if (bool) {
        this.statusMsg.next(bool);
      } else {
        this.statusMsg.next(bool);
      }
    });
  }
}
