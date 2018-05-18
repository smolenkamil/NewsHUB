import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CategoriesChoiceComponent} from "../categoriesChoice/categoriesChoice";

@Component({
  selector: 'catMenu',
  templateUrl: './categoriesMenu.html',
  styleUrls: ['./categoriesMenu.css']
})
export class CatMenuComponent implements OnInit{
  constructor(private router: Router){}

  categories = [
    {"id": 0, "name": "Business"},
    {"id": 1, "name": "Entertainment"},
    {"id": 2, "name": "Health"},
    {"id": 3, "name": "Science"},
    {"id": 4, "name": "Sports"},
    {"id": 5, "name": "Technology"},
    {"id": 6, "name": "General"}
  ]

  a = {"id": 0, "name": "Business"}
  b = {"id": 1, "name": "Entertainment"}
  c = {"id": 2, "name": "Health"}
  d = {"id": 3, "name": "Science"}
  e = {"id": 4, "name": "Sports"}
  f = {"id": 5, "name": "Technology"}
  g = {"id": 6, "name": "General"}

  ngOnInit() {
    //Było blisko, ale nie zadziałało...
    let bI = <HTMLInputElement> document.getElementById("businessInput");
    let eI = <HTMLInputElement> document.getElementById("entertainmentInput");
    let hI = <HTMLInputElement> document.getElementById("healthInput");
    let scI = <HTMLInputElement> document.getElementById("scienceInput");
    let spI = <HTMLInputElement> document.getElementById("sportsInput");
    let tI = <HTMLInputElement> document.getElementById("technologyInput");

    // console.log(this.categories)

    if (bI.checked || bI != null) {
      this.categories.push(this.a);
    }
    if (eI.checked) {
      this.categories.push(this.b);
    }
    if (hI.checked) {
      this.categories.push(this.c);
    }
    if (scI.checked) {
      this.categories.push(this.d);
    }
    if (spI.checked) {
      this.categories.push(this.e);
    }
    if (tI.checked) {
      this.categories.push(this.f);
    }
  }

}
