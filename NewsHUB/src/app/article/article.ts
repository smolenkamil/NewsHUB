import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NewsProvider} from "../logic/news";
import {Article} from "../logic/article";

@Component({
  selector: 'article',
  templateUrl: './article.html',
  styleUrls: ['./article.css']
})
export class ArticleComponent implements OnInit, OnChanges{

  newsx: NewsProvider;
  article: Article;
  @Input('cat')catNumber:number;

  ngOnChanges(chang: SimpleChanges){
    this.article = this.newsx.getArticle(chang.catNumber.currentValue);
    this.newsx.eraseArticles();
  }

  constructor(){
    if(this.catNumber===0)
      this.catNumber=0;
    this.newsx = new NewsProvider()
  }

  ngOnInit(){
    this.article = this.newsx.getArticle(this.catNumber);
    this.newsx.eraseArticles();
  }

}
