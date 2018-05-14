import { Component, OnInit } from '@angular/core';
import {NewsProvider} from "../logic/news";
import {Article} from "../logic/article";

@Component({
  selector: 'sliderArticle',
  templateUrl: './sliderArticle.html',
  styleUrls: ['./sliderArticle.css']
})

export class SliderArticleComponent implements OnInit{

  newsx: NewsProvider;
  sliderArticle: Article;

  constructor(){
    this.newsx = new NewsProvider();
  }

  ngOnInit(){
    this.sliderArticle = this.newsx.getArticles(6)[1];
  }
}
