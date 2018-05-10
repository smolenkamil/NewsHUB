import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header';
import { MenuComponent } from './menu/menu';
import { SearchComponent } from './searchBar/searchBar';
import { ProfileMenuComponent } from './profileMenu/profileMenu';
import { ContenerComponent } from './contener/contener';
import { SliderComponent} from './slider/slider';
import { ArticleComponent } from './article/article';
import { FooterComponent } from './footer/footer';
import {DatePipeComponent, WeatherComponent} from './weather/weather';
import {BtnSingUpComponent} from "./btnSingUp/btnSingUP";
import {BtnLogInComponent} from "./btnLogIn/btnLogIn";
import {SliderArticleComponent} from "./sliderArticle/sliderArticle";

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    SearchComponent,
    ProfileMenuComponent,
    ContenerComponent,
    SliderComponent,
    ArticleComponent,
    WeatherComponent,
    FooterComponent,
    DatePipeComponent,
    BtnSingUpComponent,
    BtnLogInComponent,
    SliderArticleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    HeaderComponent,
    MenuComponent,
    SearchComponent,
    // ProfileMenuComponent,
    ContenerComponent,
    SliderComponent,
    ArticleComponent,
    WeatherComponent,
    FooterComponent,
    DatePipeComponent,
    BtnSingUpComponent,
    BtnLogInComponent,
    SliderArticleComponent
  ]
})
export class AppModule { }
