
import {Component, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NewsProvider} from "../logic/news";
import {Article} from "../logic/article";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    this.newsx = new NewsProvider()
  }
  numbersForSlider: number[];
  articlesForSlider: Article[];
  articles: Article[];
  newsx: NewsProvider;
  catId: number;





  ngOnInit() {
    this.articlesForSlider = this.newsx.getArticles(6);

    this.route.params.subscribe((params) => {
      this.catId = params['cat'];
      this.articles = this.newsx.getArticles(this.catId);
    })

  }
}
