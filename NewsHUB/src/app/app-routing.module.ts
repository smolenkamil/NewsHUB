import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ProfileContainerComponent} from "./profileContainer/profileContainer.component";
import {HomepageComponent} from "./homepage/homepage.component";

const routes: Routes = [
  {path: '', redirectTo: 'homepage', pathMatch: 'full'},
  {path: 'homepage/:cat', component: HomepageComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'profile', component: ProfileContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
