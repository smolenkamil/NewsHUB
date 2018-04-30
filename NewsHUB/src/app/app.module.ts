import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HeaderComponent } from './header/header';
import { MenuComponent } from './menu/menu';
import { SearchComponent } from './searchBar/searchBar';
import { ContenerComponent } from './contener/contener';
import {ArticleComponent} from "./article/article";
import { FooterComponent } from './footer/footer';

@NgModule({
  declarations: [HeaderComponent,
    MenuComponent,
    ContenerComponent,
    ArticleComponent,
    SearchComponent,
    ContenerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ HeaderComponent, MenuComponent,SearchComponent, ContenerComponent, ArticleComponent , FooterComponent]
})
export class AppModule { }
