import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ArticleComponent} from "./article/article.component";
import {BtnLogInComponent} from "./btnLogIn/btnLogIn.component";
import {ContainerComponent} from "./container/container.component";
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {MenuComponent} from "./menu/menu.component";
import {ProfileMenuComponent} from "./profileMenu/profileMenu.component";
import {SearchComponent} from "./searchBar/searchBar.component";
import {SliderComponent} from "./slider/slider.component";
import {SliderArticleComponent} from "./sliderArticle/sliderArticle.component";
import {WeatherComponent} from "./weather/weather.component";

const routes: Routes = [
  {path: '', redirectTo: 'homepage', pathMatch: 'full'},
  {path: 'article', component: ArticleComponent},
  {path: 'btnLogIn', component: BtnLogInComponent},
  {path: 'container', component: ContainerComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'hamburger', component: MenuComponent},
  {path: 'profileMenu', component: ProfileMenuComponent},
  {path: 'searchBar', component: SearchComponent},
  {path: 'slider', component: SliderComponent},
  {path: 'sliderArticle', component: SliderArticleComponent},
  {path: 'weather', component: WeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
