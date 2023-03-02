import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  isActivated: boolean
  activatedSubscription

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.activatedSubscription = this.userService.isActivated
      .subscribe((isActivated: boolean)=>{
        this.isActivated = isActivated
      })
  }

  ngOnDestroy() {
    this.activatedSubscription.unsubscribe()
  }
}
