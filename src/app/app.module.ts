import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ProduitComponent } from './catalogue/produit/produit.component';
import { DetailProduitComponent } from './catalogue/produit/detail-produit/detail-produit.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import { PanierComponent } from './panier/panier.component';
import { ComplimentComponent } from './catalogue/compliment/compliment.component';
import { DetailMenuComponent } from './catalogue/menu/detail-menu/detail-menu.component';
import { MenuComponent } from './catalogue/menu/menu.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ItemComplementComponent } from './catalogue/compliment/item-complement/item-complement.component';
import { CommandesComponent } from './commandes/commandes.component';
import { DetailCommandeComponent } from './commandes/detail-commande/detail-commande.component';
import { PageNoteFoundComponent } from './page-note-found/page-note-found.component';
import { CommandesClientComponent } from './commandes/commandes-client/commandes-client.component';
import { DetailCommandeClientComponent } from './commandes/commandes-client/detail-commande-client/detail-commande-client.component';
import {AdminModule} from "./admin/admin.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CatalogueComponent,
    ProduitComponent,
    DetailProduitComponent,
    FooterComponent,
    PanierComponent,
    ComplimentComponent,
    DetailMenuComponent,
    MenuComponent,
    ItemComplementComponent,

    CommandesComponent,
    DetailCommandeComponent,
    PageNoteFoundComponent,
    CommandesClientComponent,
    DetailCommandeClientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    AdminModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [
    CommandesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
