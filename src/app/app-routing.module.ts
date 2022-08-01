import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatalogueComponent} from "./catalogue/catalogue.component";
import {DetailProduitComponent} from "./catalogue/produit/detail-produit/detail-produit.component";
import {PanierComponent} from "./panier/panier.component";
import {DetailMenuComponent} from "./catalogue/menu/detail-menu/detail-menu.component";

const routes: Routes = [
  { path:'', component:CatalogueComponent},
  { path:'catalogue/produits/:id', component:DetailProduitComponent},
  { path:'catalogue/menu/:id', component:DetailMenuComponent},
  { path:'panier', component:PanierComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
