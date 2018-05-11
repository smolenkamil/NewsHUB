import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
// import {AngularFireModule} from './angularfire2';
// import {AngularFireAuthModule} from 'angularfire2/auth';
import {AuthService} from './auth.service';

import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SearchComponent } from './searchBar/searchBar.component';
import { ProfileMenuComponent } from './profileMenu/profileMenu.component';
import { ContainerComponent } from './container/container.component';
import { SliderComponent} from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import {DatePipeComponent, WeatherComponent} from './weather/weather.component';
import {BtnLogInComponent} from "./btnLogIn/btnLogIn.component";
import {SliderArticleComponent} from "./sliderArticle/sliderArticle.component";
import {AppComponent} from './app.component';
import {ProfileContainerComponent} from "./profileContainer/profileContainer.component";
import {UserDataComponent} from "./userData/userData.component";
import {CategoriesChoiceComponent} from "./categoriesChoice/categoriesChoice.component";
import {WeatherChoiceComponent} from "./weatherChoice/weatherChoice.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {ArticleComponent} from "./article/article.component";

const firebaseconfig = {
  apiKey: "AIzaSyAMc1KI-zlkosp7qLKeMB4_F5Nvv82C-FM",
  authDomain: "newshub-3011.firebaseapp.com",
  databaseURL: "https://newshub-3011.firebaseio.com",
  projectId: "newshub-3011",
  storageBucket: "newshub-3011.appspot.com",
  messagingSenderId: "159798983174"
};

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    SearchComponent,
    // ProfileMenuComponent,
    ContainerComponent,
    SliderComponent,
    ArticleComponent,
    WeatherComponent,
    FooterComponent,
    DatePipeComponent,
    BtnLogInComponent,
    SliderArticleComponent,
    AppComponent,
    ProfileContainerComponent,
    UserDataComponent,
    CategoriesChoiceComponent,
    WeatherChoiceComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireAuthModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [
    HeaderComponent,
    MenuComponent,
    SearchComponent,
    // ProfileMenuComponent,
    ContainerComponent,
    SliderComponent,
    ArticleComponent,
    WeatherComponent,
    FooterComponent,
    DatePipeComponent,
    BtnLogInComponent,
    SliderArticleComponent,
    AppComponent,
    ProfileContainerComponent,
    UserDataComponent,
    CategoriesChoiceComponent,
    WeatherChoiceComponent,
    HomepageComponent
  ]
})
export class AppModule { }
