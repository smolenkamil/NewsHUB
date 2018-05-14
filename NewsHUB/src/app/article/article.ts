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
    this.article = this.newsx.getArticles(chang.catNumber.currentValue)[1];
    // this.newsx.eraseArticles();
  }

  constructor(){
    this.newsx = new NewsProvider()
  }


  ngOnInit(){
    if(this.catNumber===undefined)
      this.catNumber=6;
    this.article = this.newsx.getArticles(this.catNumber)[1];
    // this.newsx.eraseArticles();
  }

}
