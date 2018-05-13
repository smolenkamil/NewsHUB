import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'catMenu',
  templateUrl: './categoriesMenu.html',
  styleUrls: ['./categoriesMenu.css']
})
export class CatMenuComponent {
  constructor(private router: Router){

  }
  categories = [
    {"id": 0, "name": "Business"},
    {"id": 1, "name": "Entertainment"},
    {"id": 2, "name": "Health"},
    {"id": 3, "name": "Science"},
    {"id": 4, "name": "Sports"},
    {"id": 5, "name": "Technology"},
    {"id": 6, "name": "General"}
  ]

}
