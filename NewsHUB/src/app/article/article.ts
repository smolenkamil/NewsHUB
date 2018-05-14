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
  @Input('articleId')ident:number;
  @Input('cat')catNumber:number;
  @Input('tagx')tag:string;

  ngOnChanges(chang: SimpleChanges){
    console.log("ngOnChanges")
    if(this.tag===undefined)
      this.article = this.newsx.getArticles(chang.catNumber.currentValue)[this.ident];
    else
      this.article = this.newsx.searchArticle(chang.tag.currentValue)[this.ident];
  }

  constructor(){
    this.newsx = new NewsProvider()
  }


  ngOnInit(){
    console.log("ngOnInit")
    if(this.catNumber===undefined)
      this.catNumber=6;
    if(this.tag!== undefined)
      this.article = this.newsx.searchArticle(this.tag)[this.ident];
    else
      this.article = this.newsx.getArticles(this.catNumber)[this.ident];
  }

}
