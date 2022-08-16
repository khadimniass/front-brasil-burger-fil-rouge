import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatalogueComponent} from "./catalogue/catalogue.component";
import {DetailProduitComponent} from "./catalogue/produit/detail-produit/detail-produit.component";
import {PanierComponent} from "./panier/panier.component";
import {DetailMenuComponent} from "./catalogue/menu/detail-menu/detail-menu.component";
import {DetailCommandeComponent} from "./commandes/detail-commande/detail-commande.component";
import {PageNoteFoundComponent} from "./page-note-found/page-note-found.component";
import {CommandesClientComponent} from "./commandes/commandes-client/commandes-client.component";
import {CommandesComponent} from "./commandes/commandes.component";

const routes: Routes = [
  { path:'', component:CatalogueComponent},
  { path:'catalogue/produits/:id', component:DetailProduitComponent},
  { path:'catalogue/menu/:id', component:DetailMenuComponent},
  { path:'panier', component:PanierComponent},
  { path:'commandes-client', component:CommandesClientComponent},
  { path:'all-commandes', component:CommandesComponent},
  { path:'commande/:id', component:DetailCommandeComponent},
  {
    path:'admin',loadChildren : ()=>import('./admin/admin.module').then(mod=>mod.AdminModule)
  },
  {
    path:'auth',loadChildren : ()=>import('./auth/auth.module').then(auth=>auth.AuthModule)

  },
  { path:'404', component:PageNoteFoundComponent},
  { path:'**', redirectTo:'404'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
