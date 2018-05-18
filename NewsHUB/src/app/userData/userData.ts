import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database-deprecated';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import {FirebaseDatabase} from '@firebase/database-types';
import {AngularFireAuth} from "angularfire2/auth";


@Component({
  selector: 'userData',
  templateUrl: './userData.html',
  styleUrls: ['./userData.css']
})
export class UserDataComponent {
  // public userDataa: FirebaseObjectObservable;

  db:FirebaseDatabase;
  auth:AngularFireAuth;
  userID:string;

  constructor(db: AngularFireDatabase, auth: AngularFireAuth) {
    // this.userDatas = db.list('/usersData');
    this.db=db.database;
    this.auth=auth;
    this.auth.authState.subscribe((user) => {
      if(user) this.userID = user.uid;
      this.getUserData()
    });
  }


  getUserData(){
    let userName = <HTMLInputElement> document.getElementById("inputName");
    let userSurname = <HTMLInputElement> document.getElementById("inputSurname");
    this.db.ref('users/'+this.userID).on('value', (snapshot) => {
      userName.value = snapshot.val() && snapshot.val().name || "";
      userSurname.value = snapshot.val() && snapshot.val().surname || "";
    });
  }

  addUserData(): void {
    let userName = <HTMLInputElement> document.getElementById("inputName");
    let userSurname = <HTMLInputElement> document.getElementById("inputSurname");
    this.db.ref('users/'+this.userID).set({
      name: userName.value,
      surname:userSurname.value
    })
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

