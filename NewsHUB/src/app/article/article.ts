import { Component, OnInit } from '@angular/core';
import {NewsProvider} from "../logic/news";
import {Article} from "../logic/article";

@Component({
  selector: 'article',
  templateUrl: './article.html',
  styleUrls: ['./article.css']
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
