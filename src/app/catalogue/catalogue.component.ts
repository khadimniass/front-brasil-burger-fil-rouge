import { Component, OnInit } from '@angular/core';
import {Produit} from "../models/produit";
import {ListCataloguesService} from "../services/list-catalogues.service";
import {BackService} from "../services/back.service";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  menus !:Produit[];
  burgers !:Produit[];
  constructor(private serviceCatalogue:ListCataloguesService, private serviceBack:BackService) { }

  ngOnInit(): void {
    this.burgers=this.serviceCatalogue.getBurger();
    this.menus=this.serviceCatalogue.getMenu();
    this.serviceBack.getCatalogueObs().subscribe(data => {
      console.log(data);
    });
  }
}
