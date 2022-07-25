import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { BurgersComponent } from './burgers/burgers.component';
import { MenusComponent } from './menus/menus.component';
import { DetailMenuComponent } from './detail-menu/detail-menu.component';
import { DetailBurgerComponent } from './detail-burger/detail-burger.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    CatalogueComponent,
    BurgersComponent,
    MenusComponent,
    DetailMenuComponent,
    DetailBurgerComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
