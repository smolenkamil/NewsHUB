import { Component } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database-deprecated';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';


@Component({
  selector: 'userData',
  templateUrl: './userData.html',
  styleUrls: ['./userData.css']
})
export class UserDataComponent {
  public userDatas: FirebaseListObservable<UsersData[]>;

  constructor(db: AngularFireDatabase) {
    this.userDatas = db.list('/usersData');
  }

  // private bookCounter = 0;

  addUserData(): void {
    let newData = {
      name:"Kamil Masakra",
      surname:"Cotymaszwełbiedrewno"
    }
    this.userDatas.push(newData);
  }
}

class UsersData {
  name:string;
  surname:string;
  constructor(name, surname) {
    this.name=name;
    this.surname=surname;
  }
}

// @Component({
//   selector: 'usersData',
//   template: `
//     <ul>
//       <li *ngFor="let data of userDatas | async">
//         <pre>{{ data | json }}</pre>
//       </li>
//     </ul>
//
//   `
// })
//
// export class UsersDataComponent {
// }

