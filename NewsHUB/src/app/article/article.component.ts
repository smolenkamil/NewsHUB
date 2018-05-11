import { Component, OnInit } from '@angular/core';
import {NewsProvider} from "../logic/news";
import {Article} from "../logic/article";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{

  newsx: NewsProvider;
  article: Article;

  constructor(){
    this.newsx = new NewsProvider()
  }

  ngOnInit(){
    this.article = this.newsx.getArticle();
  }

}
