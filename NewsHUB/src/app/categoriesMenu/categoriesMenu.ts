import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CategoriesChoiceComponent} from "../categoriesChoice/categoriesChoice";
import {AngularFireDatabase} from 'angularfire2/database-deprecated';
import {FirebaseDatabase} from '@firebase/database-types';
import {AngularFireAuth} from "angularfire2/auth";

@Component({
  selector: 'catMenu',
  templateUrl: './categoriesMenu.html',
  styleUrls: ['./categoriesMenu.css']
})
export class CatMenuComponent {

  constructor(private router: Router,db: AngularFireDatabase, auth: AngularFireAuth) {
    this.db=db.database;
    auth.authState.subscribe((user) => {
      if(user) this.userID = user.uid;
      this.getCatChoice()
    });
  }

  db:FirebaseDatabase;
  userID:string;


  categories = [
    {"id": 0, "name": "Business"},
    {"id": 1, "name": "Entertainment"},
    {"id": 2, "name": "Health"},
    {"id": 3, "name": "Science"},
    {"id": 4, "name": "Sports"},
    {"id": 5, "name": "Technology"},
    {"id": 6, "name": "General"}
  ]


  getCatChoice(){
    let business = <HTMLInputElement> document.getElementById("businessInput");
    let entertainment = <HTMLInputElement> document.getElementById("entertainmentInput");
    let health = <HTMLInputElement> document.getElementById("healthInput");
    let science = <HTMLInputElement> document.getElementById("scienceInput");
    let sport = <HTMLInputElement> document.getElementById("sportInput");
    let technology = <HTMLInputElement> document.getElementById("technologyInput");
    this.db.ref('categories/'+this.userID).on('value', (snapshot) => {
      business.checked = snapshot.val().business;
      entertainment.checked =  snapshot.val().entertainment ;
      health.checked =   snapshot.val().health;
      science.checked =  snapshot.val().science ;
      sport.checked = snapshot.val().sport;
      technology.checked = snapshot.val().technology;
    });
  }

}



