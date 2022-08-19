import {Component, Input, OnInit} from '@angular/core';
import {Produit} from "../../../models/models.type.variable";
import {ServiceService} from "../../../services/service.service";
import {ServicePanierService} from "../../../services/service-panier.service";

@Component({
  selector: 'app-item-complement',
  templateUrl: './item-complement.component.html',
  styleUrls: ['./item-complement.component.css']
})
export class ItemComplementComponent implements OnInit {
  @Input() produit!:Produit;
  constructor(private service:ServiceService,private servicePanier:ServicePanierService) { }

  ngOnInit(): void {
  }
  affichageImage(image:string){
    return this.service.demanderAffichageImage(image);
  }
  ajouterAuPagner(element:Produit) {
    this.servicePanier.ajouter(element);
  }
}
