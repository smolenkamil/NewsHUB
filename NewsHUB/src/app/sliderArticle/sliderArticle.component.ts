import { Component, OnInit } from '@angular/core';
import {NewsProvider} from "../logic/news";
import {Article} from "../logic/article";

@Component({
  selector: 'app-sliderArticle',
  templateUrl: './sliderArticle.component.html',
  styleUrls: ['./sliderArticle.component.css']
})

export class SliderArticleComponent implements OnInit{

  newsx: NewsProvider;
  sliderArticle: Article;

  constructor(){
    this.newsx = new NewsProvider();
  }

  ngOnInit(){
    this.sliderArticle = this.newsx.getArticle();
  }
}
