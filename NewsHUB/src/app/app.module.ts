import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AuthService} from './auth.service';

import { MenuComponent } from './menu/menu';
import { SearchComponent } from './searchBar/searchBar';
import { ProfileMenuComponent } from './profileMenu/profileMenu';
import { SliderComponent} from './slider/slider';
import {DatePipeComponent, WeatherComponent} from './weather/weather';
import {SliderArticleComponent} from "./sliderArticle/sliderArticle";
import {AppComponent} from './app.component';
import {ProfileContainerComponent} from "./profileContainer/profileContainer.component";
import {UserDataComponent} from "./userData/userData";
import {CategoriesChoiceComponent} from "./categoriesChoice/categoriesChoice";
import {WeatherChoiceComponent} from "./weatherChoice/weatherChoice";
import {HomepageComponent} from "./homepage/homepage.component";
import {ArticleComponent} from "./article/article";
import {BtnLoginComponent} from "./btnLogIn/btnLogin";

const firebaseConfig = {
  apiKey: "AIzaSyAMc1KI-zlkosp7qLKeMB4_F5Nvv82C-FM",
  authDomain: "newshub-3011.firebaseapp.com",
  databaseURL: "https://newshub-3011.firebaseio.com",
  projectId: "newshub-3011",
  storageBucket: "newshub-3011.appspot.com",
  messagingSenderId: "159798983174"
};

@NgModule({
  declarations: [
    BtnLoginComponent,
    MenuComponent,
    SearchComponent,
    ProfileMenuComponent,
    SliderComponent,
    ArticleComponent,
    WeatherComponent,
    DatePipeComponent,
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
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
