import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivraisonsComponent } from './livraisons/livraisons.component';
import { AdminDetailsCommandesComponent } from './admin-commandes/admin-details-commandes/admin-details-commandes.component';
import { DetailsLivraisonComponent } from './livraisons/details-livraison/details-livraison.component';
import { NewProduitComponent } from './admin-produits/new-produit/new-produit.component';
import {RouterModule} from "@angular/router";
import { LivreurComponent } from './livraisons/livreur/livreur.component';
import { AdminProduitsComponent } from './admin-produits/admin-produits.component';
import { AdminCommandesComponent } from './admin-commandes/admin-commandes.component';
import { ZoneComponent } from './admin-commandes/zone/zone.component';
import { RowCommandesComponent } from './admin-commandes/row-commandes/row-commandes.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { CommandesLivreesComponent } from './commandes-livrees/commandes-livrees.component';
import {HttpClientModule} from "@angular/common/http";

  export const routes = [
  {path:'', component:AdminCommandesComponent},
  {path: 'livraisons', children:[
      {path:'', component:LivraisonsComponent},
      {path:'retour', component:CommandesLivreesComponent},
      {path: 'livreur/:id',component: LivreurComponent},
      {path: ':id',component: DetailsLivraisonComponent},
    ],
  },
  {path:'produits',children:[
      {path: '',component:AdminProduitsComponent},
      {path: 'new',component: NewProduitComponent}
    ]
  },
 {path:'commandes',children: [
    {path: '',component:AdminCommandesComponent},
    {path: ':id',component:AdminDetailsCommandesComponent},
    {path:'zone',component: ZoneComponent}
  ]
 },
];
@NgModule({
  declarations: [
    LivraisonsComponent,
    AdminDetailsCommandesComponent,
    DetailsLivraisonComponent,
    NewProduitComponent,
    LivreurComponent,
    AdminProduitsComponent,
    AdminCommandesComponent,
    ZoneComponent,
    RowCommandesComponent,
    CommandesLivreesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],exports:[
    LivraisonsComponent,
    AdminDetailsCommandesComponent,
    DetailsLivraisonComponent,
    NewProduitComponent,
    LivreurComponent,
    AdminProduitsComponent,
    AdminCommandesComponent,
    ZoneComponent
  ]
})

export class AdminModule { }
