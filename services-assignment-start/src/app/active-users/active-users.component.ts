import {Component, OnInit} from '@angular/core';
import {UsersServices} from '../users.services';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  activeUsers: string[];

  constructor(private usersServices: UsersServices) {}

  ngOnInit() {
    this.activeUsers = this.usersServices.activeUsers;
  }

  onSetToInactive(id: number) {
    this.usersServices.onSetToActive(id);
  }
}
