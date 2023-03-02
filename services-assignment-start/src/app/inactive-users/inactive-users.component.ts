import {Component, OnInit} from '@angular/core';
import {UsersServices} from '../users.services';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{

  inactiveUsers: string[];

  constructor(private usersServices: UsersServices) {}

  ngOnInit() {
    this.inactiveUsers = this.usersServices.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.usersServices.onSetToInactive(id);
  }

}
