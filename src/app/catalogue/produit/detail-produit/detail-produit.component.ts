import {Component, Input, OnInit} from '@angular/core';
import {Produit} from "../../../models/models.type.variable";
import {ListCataloguesService} from "../../../services/list-catalogues.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceService} from "../../../services/service.service";
import {DomSanitizer} from "@angular/platform-browser";
import {BackService} from "../../../services/back.bd.service";

@Component({
  selector: 'app-detail-burger',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {
  produit!:Produit;
  constructor(private serviceCat:ListCataloguesService,
              private activeRoute:ActivatedRoute,
              private router:Router,
              private service:ServiceService,
              private servicebd:BackService
  ) { }

  ngOnInit(): void {
    const idProduit = +this.activeRoute.snapshot.params['id'];
    //this.produit=this.serviceCat.getBurgeryId(idProduit); // donne du tableau
        this.servicebd.getProduitId(idProduit).subscribe( data=>{
        this.produit=data;
      }
    );
  }
  afficherImage(img:string){
    return this.service.demanderAffichageImage(img);
  }
}
