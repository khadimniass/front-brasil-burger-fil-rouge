import { Component, OnInit } from '@angular/core';
import {Produit, ProduitDb} from "../models/models.type.variable";
import {ListCataloguesService} from "../services/list-catalogues.service";
import {BackService} from "../services/back.bd.service";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})

export class CatalogueComponent implements OnInit {
  menus !:Produit[];
  burgers !:Produit[];
  className:string="show";
  searchText!:string;
  constructor(private serviceCatalogue:ListCataloguesService,
              private serviceBack:BackService,
  ) { }
  ngOnInit(): void {
    this.serviceBack.getCatalogueObs().subscribe(catalogue => {
      this.burgers=catalogue.burgers
      this.menus=catalogue.menus
    });
  }
}
