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
import {CategoriesChoiceComponent} from "./categoriesChoice/categoriesChoice.component";
import {ProfileContainerComponent} from "./profileContainer/profileContainer.component";
import {UserDataComponent} from "./userData/userData.component";
import {WeatherChoiceComponent} from "./weatherChoice/weatherChoice.component";
import {HomepageComponent} from "./homepage/homepage.component";

const routes: Routes = [
  {path: '', redirectTo: 'homepage', pathMatch: 'full'},
  {path: 'article', component: ArticleComponent},
  {path: 'btnLogIn', component: BtnLogInComponent},
  {path: 'categoriesChoice', component: CategoriesChoiceComponent},
  {path: 'container', component: ContainerComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'hamburger', component: MenuComponent},
  {path: 'profileContainer', component: ProfileContainerComponent},
  {path: 'profileMenu', component: ProfileMenuComponent},
  {path: 'searchBar', component: SearchComponent},
  {path: 'slider', component: SliderComponent},
  {path: 'sliderArticle', component: SliderArticleComponent},
  {path: 'userData', component: UserDataComponent},
  {path: 'weather', component: WeatherComponent},
  {path: 'weatherChoice', component: WeatherChoiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
