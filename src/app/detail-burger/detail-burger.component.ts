import { Component, OnInit } from '@angular/core';
import {Produit} from "../models/produit";
import {ListCataloguesService} from "../services/list-catalogues.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-burger',
  templateUrl: './detail-burger.component.html',
  styleUrls: ['./detail-burger.component.css']
})
export class DetailBurgerComponent implements OnInit {
  burger!:Produit;
  constructor(private serviceCat:ListCataloguesService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    const burgerId = +this.router.snapshot.params['id'];
    this.burger=this.serviceCat.getBurgeryId(burgerId);
  }
}
