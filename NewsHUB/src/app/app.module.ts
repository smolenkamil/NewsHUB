import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HeaderComponent } from './header/header';
import { MenuComponent } from './menu/menu';
import { ContenerComponent } from './contener/contener';

@NgModule({
  declarations: [HeaderComponent,
    MenuComponent,
    ContenerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ HeaderComponent, MenuComponent, ContenerComponent ]
})
export class AppModule { }
