import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HeaderComponent } from './header/header';
import { MenuComponent } from './menu/menu';
import { ContenerComponent } from './contener/contener';
import { FooterComponent } from './footer/footer';

@NgModule({
  declarations: [HeaderComponent,
    MenuComponent,
    ContenerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ HeaderComponent, MenuComponent, ContenerComponent, FooterComponent ]
})
export class AppModule { }
