import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListeCarnetComponent} from "./liste-carnet/liste-carnet.component";
import {DetailContactComponent} from "./detail-contact/detail-contact.component";
import {NewContactComponent} from "./new-contact/new-contact.component";

const routes: Routes = [
  {path: 'liste', component: ListeCarnetComponent},
  {path: 'detail/:id', component: DetailContactComponent},
  {path: '', redirectTo:'/liste', pathMatch:'full'},
  {path: 'nouveau', component: NewContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
