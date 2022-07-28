import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatalogueComponent} from "./catalogue/catalogue.component";
import {DetailProduitComponent} from "./catalogue/detail-produit/detail-produit.component";
import {PanierComponent} from "./panier/panier.component";

const routes: Routes = [
  { path:'', component:CatalogueComponent},
  { path:'catalogue/produits/:id', component:DetailProduitComponent},
  { path:'panier', component:PanierComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
