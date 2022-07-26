import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatalogueComponent} from "./catalogue/catalogue.component";
import {DetailMenuComponent} from "./detail-menu/detail-menu.component";
import {DetailBurgerComponent} from "./detail-burger/detail-burger.component";

const routes: Routes = [
  { path:'', component:CatalogueComponent},
  { path:'catalogue/menu/:id', component:DetailMenuComponent},
  { path:'catalogue/burger/:id', component:DetailBurgerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
