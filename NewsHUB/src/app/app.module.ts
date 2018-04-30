import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HeaderComponent } from './header/header';
import { MenuComponent } from './menu/menu';
import { SearchComponent } from './searchBar/searchBar';
import { ContenerComponent } from './contener/contener';

@NgModule({
  declarations: [HeaderComponent,
    MenuComponent,
    SearchComponent,
    ContenerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ HeaderComponent, MenuComponent, SearchComponent, ContenerComponent ]
})
export class AppModule { }
