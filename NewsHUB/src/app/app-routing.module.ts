import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// import {BtnLogInComponent} from "./btnLogIn/btnLogIn";
// import {ContainerComponent} from "./container/container.component";
// import {FooterComponent} from "./footer/footer.component";
// import {HeaderComponent} from "./header/header.component";
import {MenuComponent} from "./menu/menu";
import {ArticleComponent} from "./article/article";
import {ProfileMenuComponent} from "./profileMenu/profileMenu";
import {SearchComponent} from "./searchBar/searchBar";
import {SliderComponent} from "./slider/slider";
import {SliderArticleComponent} from "./sliderArticle/sliderArticle";
import {WeatherComponent} from "./weather/weather";
import {CategoriesChoiceComponent} from "./categoriesChoice/categoriesChoice";
import {UserDataComponent} from "./userData/userData";
import {WeatherChoiceComponent} from "./weatherChoice/weatherChoice";
import {ProfileContainerComponent} from "./profileContainer/profileContainer.component";
import {HomepageComponent} from "./homepage/homepage.component";

const routes: Routes = [
  {path: '', redirectTo: 'homepage', pathMatch: 'full'},
  // {path: 'article', component: ArticleComponent},
  // {path: 'btnLogIn', component: BtnLogInComponent},
  // {path: 'categoriesChoice', component: CategoriesChoiceComponent},
  // {path: 'container', component: ContainerComponent},
  // {path: 'footer', component: FooterComponent},
  // {path: 'header', component: HeaderComponent},
  {path: 'homepage', component: HomepageComponent},
  // {path: 'hamburger', component: MenuComponent},
  {path: 'profileContainer', component: ProfileContainerComponent},
  // {path: 'profileMenu', component: ProfileMenuComponent},
  // {path: 'searchBar', component: SearchComponent},
  // {path: 'slider', component: SliderComponent},
  // {path: 'sliderArticle', component: SliderArticleComponent},
  // {path: 'userData', component: UserDataComponent},
  // {path: 'weather', component: WeatherComponent},
  // {path: 'weatherChoice', component: WeatherChoiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
