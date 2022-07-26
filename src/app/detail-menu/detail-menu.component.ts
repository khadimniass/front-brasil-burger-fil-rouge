import { Component, OnInit } from '@angular/core';
import {Produit} from "../models/produit";
import {ListCataloguesService} from "../services/list-catalogues.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detail-menu',
  templateUrl: './detail-menu.component.html',
  styleUrls: ['./detail-menu.component.css']
})
export class DetailMenuComponent implements OnInit {
  menu!:Produit;
  constructor(private serviceCat:ListCataloguesService,private router:ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    const prodId = + this.router.snapshot.params['id'];
    this.menu = this.serviceCat.getProdById(prodId);
    if (this.menu===undefined){
      this.route.navigateByUrl('');
    }
  }
}
