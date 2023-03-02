import {Component} from '@angular/core';
import {UsersServices} from './users.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersServices]
})
export class AppComponent{

}
