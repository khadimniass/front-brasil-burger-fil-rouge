import {Component, Input, OnInit} from '@angular/core';
import {Produit} from "../../models/models.type.variable";
import {Router} from "@angular/router";
import {ServicePanierService} from "../../services/service-panier.service";
import {DomSanitizer} from "@angular/platform-browser";
import {ServiceService} from "../../services/service.service";

@Component({
  selector: 'app-burgers',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  @Input() produit!:Produit;
  private static panier: Produit[]=[];

  constructor(private router:Router,
              private servicePanier:ServicePanierService,
              private sanitizer:DomSanitizer,
              private service:ServiceService
  ) { }

  ngOnInit(): void {
    //console.log("length : ",localStorage.getItem("panier"))
  }
  details(){
    this.router.navigateByUrl(`catalogue/produits/${this.produit.id}`);
  }

  ajouterAuPagner(element:Produit) {
     this.servicePanier.ajouter(element);
  }

  affichageImage(image:string){
    return this.service.demanderAffichageImage(image);
  }

}
