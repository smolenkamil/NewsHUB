import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'searchContainer',
  templateUrl: './searchContainer.html',
  styleUrls: ['./searchContainer.css']
})
export class SearchContainerComponent {
  constructor(private route: ActivatedRoute) {}

  searchTag:string;


  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.searchTag = params['tag'];
    })

  }

}
