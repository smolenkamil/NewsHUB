import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HeaderComponent } from './header/header';
import { MenuComponent } from './menu/menu';
import { ContenerComponent } from './contener/contener';
import {ArticleComponent} from "./article/article";

@NgModule({
  declarations: [HeaderComponent,
    MenuComponent,
    ContenerComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ HeaderComponent, MenuComponent, ContenerComponent, ArticleComponent]
})
export class AppModule { }
