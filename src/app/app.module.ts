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
import {FormsModule} from "@angular/forms";

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
