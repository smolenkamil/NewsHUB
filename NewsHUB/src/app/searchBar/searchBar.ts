import { Component } from '@angular/core';

@Component({
  selector: 'searchBar',
  templateUrl: './searchBar.html',
  styleUrls: ['./searchBar.css']
})
export class SearchComponent {

  searchTag:string;

  sendTag(event){
    this.searchTag=event.target.value;
  }
}
