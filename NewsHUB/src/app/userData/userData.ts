import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'userData',
  templateUrl: './userData.html',
  styleUrls: ['./userData.css']
})
export class UserDataComponent {}

class UsersData {
  constructor(public name, public surname) { }
}

@Component({
  selector: 'usersData',
  template: `
    <ul>
      <li *ngFor="let data of userDatas | async">
        <pre>{{ data | json }}</pre>
      </li>
    </ul>
    
  `
})

export class UsersDataComponent {
  public userDatas: FirebaseListObservable<UsersData[]>;

  constructor(db: AngularFireDatabase) {
    this.userDatas = db.list('/usersData');
  }

  // private bookCounter = 0;

  public AddUserData(): void {
    let newData = new UsersData(`Kamil`, 'Cała');
    this.userDatas.push(newData);
  }
}

