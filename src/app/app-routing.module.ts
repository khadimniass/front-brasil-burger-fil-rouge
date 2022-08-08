import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatalogueComponent} from "./catalogue/catalogue.component";
import {DetailProduitComponent} from "./catalogue/produit/detail-produit/detail-produit.component";
import {PanierComponent} from "./panier/panier.component";
import {DetailMenuComponent} from "./catalogue/menu/detail-menu/detail-menu.component";
import {CommandesComponent} from "./commandes/commandes.component";
import {DetailCommandeComponent} from "./commandes/detail-commande/detail-commande.component";
import {PageNoteFoundComponent} from "./page-note-found/page-note-found.component";
import {CommandesClientComponent} from "./commandes/commandes-client/commandes-client.component";

const routes: Routes = [
  { path:'', component:CatalogueComponent},
  { path:'catalogue/produits/:id', component:DetailProduitComponent},
  { path:'catalogue/menu/:id', component:DetailMenuComponent},
  { path:'panier', component:PanierComponent},
  { path:'commande', component:CommandesClientComponent},
  { path:'commande/:id', component:DetailCommandeComponent},
  { path:'admin', component:CommandesComponent},
  { path:'**', component:PageNoteFoundComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
