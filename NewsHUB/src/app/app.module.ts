import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AuthService} from './auth.service';

// import { HeaderComponent } from './header/header.component';
// import { ContainerComponent } from './container/container.component';
// import { FooterComponent } from './footer/footer.component';
// import {BtnLogInComponent} from "./btnLogIn/btnLogIn";
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
    // HeaderComponent,
    // ContainerComponent,
    // FooterComponent,
    // BtnLogInComponent,
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
    // HeaderComponent,
    // ContainerComponent,
    // FooterComponent,
    // BtnLogInComponent,
    // MenuComponent,
    // SearchComponent,
    // ProfileMenuComponent,
    // SliderComponent,
    // ArticleComponent,
    // WeatherComponent,
    // DatePipeComponent,
    // SliderArticleComponent,
    AppComponent
    // ProfileContainerComponent,
    // UserDataComponent,
    // CategoriesChoiceComponent,
    // WeatherChoiceComponent,
    // HomepageComponent
  ]
})
export class AppModule { }
