import * as $ from 'jquery';
import {Article} from "./article";

export class NewsProvider{

  readonly MAIN_URL = "https://newsapi.org/v2/top-headlines"
  readonly CATEGORIES = ["business", "entertainment", "health", "science", "sports", "technology", "general"]
  readonly APIKEY = "&apiKey=575d0735025241fda1b32a047f19dcd3"

  articles: Article[] = [];

  getArticles(cat):Article[]{
    this.articles = [];
    $.ajaxSetup({'async': false});
    $.getJSON(this.MAIN_URL+"?category="+this.CATEGORIES[cat]+"&country=gb"+this.APIKEY, (data) => {
      let ix = 0;
      for(let i=0;i<data.articles.length;i++){
        if(data.articles[i].title!==null && data.articles[i].urlToImage !== null && data.articles[i].description !== null ) {
          this.articles[ix] = new Article(data.articles[i].title,data.articles[i].description,data.articles[i].urlToImage )
          ix++;

        }
      }
    });
    $.getJSON(this.MAIN_URL+"?category="+this.CATEGORIES[cat]+"&country=us"+this.APIKEY, (data) => {
      let ix = this.articles.length;
      for(let i=0;i<data.articles.length;i++){
        if(data.articles[i].title!==null && data.articles[i].urlToImage !== null && data.articles[i].description !== null ) {
          this.articles[ix] = new Article(data.articles[i].title,data.articles[i].description,data.articles[i].urlToImage )
          ix++;
        }
      }
    });



    console.log(this.articles.length)
    return this.articles;
  }


}

