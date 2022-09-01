import {Component, Input, OnInit} from '@angular/core';
import {Produit} from "../../../models/models.type.variable";
import {ListCataloguesService} from "../../../services/list-catalogues.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceService} from "../../../services/service.service";
import {DomSanitizer} from "@angular/platform-browser";
import {BackService} from "../../../services/back.bd.service";
import {ServicePanierService} from "../../../services/service-panier.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-detail-burger',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {
  produit!:Produit;
  burgers!:Produit[];
  constructor(private serviceCat:ListCataloguesService,
              private activeRoute:ActivatedRoute,
              private router:Router,
              private service:ServiceService,
              private servicebd:BackService,
              private servicePanier:ServicePanierService
  ){}
  ngOnInit(): void {
    const idProduit = + this.activeRoute.snapshot.params['id'];
    //this.produit=this.serviceCat.getBurgeryId(idProduit); // donne du tableau
        this.servicebd.getProduitById(idProduit).subscribe(data=>{
        this.produit=data;
      });
    this.servicebd.getCatalogueObs().subscribe(catalogue => {
      this.burgers=catalogue.burgers
    });
  }

  afficherImage(img:string){
    return this.service.demanderAffichageImage(img);
  }

  ajouterAuPagner(element:Produit) {
    this.servicePanier.ajouter(element);
  }

}
